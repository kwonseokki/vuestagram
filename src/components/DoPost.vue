<template>

  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{background:`url(${postData.userImage})`}">
      </div>
     
      <span class="profile-name">{{postData.name}}</span>
    </div>
    <div @click="upLike()" :class="'post-body '+ postData.filter" :style="{background :`url(${postData.postImage}) center center`}">
    </div>
    <div class="post-content">
      <p>{{$store.state.like}} Likes</p>
      <p><strong>{{postData.name}}</strong>{{postData.content}}</p>
      <p class="date">May 15</p>
    </div>
</div> 
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name : "DoPost",
    data() {
      return {
       
      }
    },
    props : {
       postData:Object,
       filterName : String
    },
    methods : {
      ...mapMutations(['upLike'])
    }
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-size:cover;
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
  overflow:hidden;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
  overflow:hidden;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>