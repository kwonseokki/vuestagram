import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();

let app = createApp(App); // app이라는 뷰설정부분임
app.config.globalProperties.emitter = emitter; // 글로벌한 변수 보관함 모든 컴포넌트들이 가져다 쓸수있음. axios 사용할떄 좋음
app.mount('#app')
