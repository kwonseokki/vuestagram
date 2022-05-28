import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            name : "kim",
            age : 20,
            like : 30,
            likeStatus : false,
            more : {},
        }
    },
    mutations : {
        changeName(state) {
            state.name = "park";
        },
        increaseAge(state, payload) {
            state.age += payload;
        },
        upLike(state){
        
            if(state.likeStatus == false) {
               state.like++;
               state.likeStatus = true;
            } else if(state.likeStatus == true) {
               state.like--;
               state.likeStatus = false;
            }

        },
        setMore(state, data){
            state.more = data;
        }
    },
    actions : {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
            .then((res)=>{
                console.log(res);
                context.commit('setMore', res.data)
            })
            .catch(()=>{
                
            })
        }
    }
})

export default store;