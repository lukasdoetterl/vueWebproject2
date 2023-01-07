import { createApp } from 'vue'
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from "./router/";

export const SERVER_URL = "http://localhost:9000";
export async function post_it(url){
    const req = SERVER_URL + url;
    return await fetch(req, {
        method: 'POST',
        headers: {
            'Accept': 'application/json */*',
            'Content-Type': 'application/json'
        },
        body: ""
    });
}

export async function get_it(url){
    const req = SERVER_URL + url;
    return await fetch(req, {
        method: 'GET',
        headers: {
            'Accept': 'application/json */*',
            'Content-Type': 'application/json'
        },
        body: ""
    });
}
const BASE_URL = import.meta.env.BASE_URL
console.log(BASE_URL)
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app')
