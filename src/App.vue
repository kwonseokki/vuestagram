<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++;">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo"/>
  </div>
  <p>{{name}}{{age}}</p>
  <p>{{내이름}}</p>
  <ContainerPost :postData="postData" :step="step" :url="url" @posting="getPosting" :filterName="filterName"/>
{{$store.state.more}}
<button @click="getData()">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" accept="image/*" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>

</template>

<script>
import ContainerPost from './components/ContainerPost.vue'
import getPostDatas from './assets/data/postdata.js'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      postData : getPostDatas,
      num : 200,
      step : 3,
      url : "",
      content: "",
      filterName : "",
      counter : 0
    }
  },
  mounted() {
    this.emitter.on("fire", (filterName)=>{
      this.filterName = filterName;
    })
  },
  components: {
   ContainerPost
  },
  methods : {
    more : function(){
      axios.get(`https://codingapple1.github.io/vue/more0.json`)
      .then((res)=>{this.postData.push(res.data)})
      .catch((err)=>{console.log(err)})
    },
    upload(e) {
     let files =  e.target.files;
     let url = URL.createObjectURL(files[0]);
     this.url = url;
     console.log(url)
     this.step++;
    },
    publish() {
      let myPost = {
        name: "Kim Hyun",
      userImage: "https://placeimg.com/100/100/arch",
      postImage: this.url,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.content,
      filter: this.filterName
      };
      this.postData.unshift(myPost);
      this.step=0;
    },
    getPosting : function(e){
      this.content = e;
    },
   ...mapActions(['getData'])
  },
  computed : {
    ...mapState(['name', 'age', 'like']), 
    ...mapState({'내이름' : 'name'})
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
