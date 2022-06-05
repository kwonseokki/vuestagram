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
import { computed, onMounted, ref,  toRefs,} from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
export default {
    name : "MyPage",
    setup(props) {
        let follower = ref([]);
       let {one} =  toRefs(props);

      let result = computed(()=>{return follower.value.length;});
      console.log(result.value);
      console.log(one.value);

      let store = useStore();
      console.log(store.state.name);
      
        onMounted(()=> {
             axios.get('/follower.json')
        .then((res)=>{ follower.value = res.data});
        })
          return { follower };
    },
    data() {
        return {}
    },
    props : {
      one : Number
    }
}
</script>

<style>

</style>