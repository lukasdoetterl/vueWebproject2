import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Game_OneScreen from "@/views/Game_OneScreen.vue";
import PlayerView from "@/views/PlayerView.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home

        },
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
        {
            path: "/game_OneScreen",
            name: "gameOS",
            component: Game_OneScreen,
        },
        {
            path: "/2player",
            name: "2Player",
            component:PlayerView,
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
})

export default router