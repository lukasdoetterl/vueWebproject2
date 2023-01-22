<style lang="less" scoped>
@import "../../public/style/playerView.less";

</style>
<template>
   <nav-bar />
<game-one-screen />
  <vaadin-button></vaadin-button>



</template>


<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import gameOneScreen  from "@/components/componentGameOneScreen.vue";
import '@vaadin/vaadin-button/vaadin-button.js';





export default {
name: "game",
components: { NavBar, Card, gameOneScreen },
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

