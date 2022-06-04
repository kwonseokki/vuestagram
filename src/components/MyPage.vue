<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header" v-for=" (x,y) in follower" :key="y">
    <div class="profile" :style="{background:`url(${follower[y].image})`}"></div>
    <span class="profile-name">{{follower[y].name}}</span>
  </div>
 
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
    name : "MyPage",
    setup() {
        let follower = ref([]);

        onMounted(()=> {
             axios.get('/follower.json')
        .then((res)=>{ follower.value = res.data});
        })

          return { follower };
    },
    data() {
        return {}
    }
}
</script>

<style>

</style>