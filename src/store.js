import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            name : "kim",
            age : 20
        }
    },
    mutations : {
        changeName(state) {
            state.name = "park";
        },
        increaseAge(state, payload) {
            state.age += payload;
        }
    }
})

export default store;