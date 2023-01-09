<style lang="less" scoped>
@import "../../public/style/playerView.less";

</style>
<template>
   <nav-bar />
<game-one-screen />



</template>


<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import gameOneScreen  from "@/components/componentGameOneScreen.vue";



export default {
name: "game",
components: { NavBar, Card, gameOneScreen},
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

