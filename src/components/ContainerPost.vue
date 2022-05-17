<template>
  <div>
  <DoPost v-for="(x,y) in postData" :key="y" :postData="postData[y]"></DoPost>
</div>

</template>

<script>
import DoPost from './DoPost.vue'
export default {
    name : "ContainerPost",
    data (){
        return{ 
           
        }
    },
    components : {
        DoPost,
    },
    props : {
      postData:Object
    }
}
</script>

<style>

</style>