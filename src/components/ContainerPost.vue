<template>
  <div v-if="step==0">
  <DoPost v-for="(x,y) in postData" :key="y" :postData="postData[y]"></DoPost>
</div>

<!-- 필터선택페이지 -->
<div  v-if="step == 1">
  <div class="upload-image" :style="`background:url(${url}) center center`"></div>
  <div class="filters">
    <FilterBox :url="url" v-for="(x,y) in filters" :key="y"></FilterBox>
    
  </div>
</div>

<!-- 글작성페이지 -->
<div v-if="step == 2">
  <div  class="upload-image" :style="`background:url(${url}) center center`"></div>
  <div class="write">
    <textarea class="write-box" @input="posting"></textarea>
  </div>
</div>
</template>

<script>
import DoPost from './DoPost.vue'
import FilterBox from './FilterBox.vue'
export default {
    name : "ContainerPost",
    data (){
        return{ 
          filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
        }
    },
    components : {
        DoPost,
        FilterBox
    },
    props : {
      postData:Object,
      step : Number,
      url : String
    },
    
    methods : {
     posting(e) {
       let posting = e.target.value;
       this.$emit("posting", posting)
     }
    }
    
}
</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
background-repeat:no-repeat;
background: center center;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>