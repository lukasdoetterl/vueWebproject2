<style lang="less" scoped>
@import "../../public/style/playerView.less";

</style>
<template>


  <nav-bar />
  <game-two-screen />


</template>


<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import gameTwoScreen  from "@/components/componentGameTwoScreen.vue";
import {get_it, post_it} from "../main.js";
import $ from 'jquery'


export default {
name: "game",
components: { NavBar, Card, gameTwoScreen},
data() {
return {


}
},
methods: {
  route() {
    this.$router.push("/Game_OneScreen");
  },
  backToLobby() {
    window.location.href = "/lobby";
  },},}





</script>

