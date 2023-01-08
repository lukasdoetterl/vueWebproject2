<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #92A8D1;">
    <a class="navbar-brand" href="#">
      <img class= "logo event" src="public/images/pictures/logo.png">
      <span class="navbar-text">
            Bettler
        </span>

    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <RouterLink class="nav-link router-link" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link router-link" aria-current="page" to="/Game_OneScreen">Start a Game</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link router-link" aria-current="page" to="/2player">2Player</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link router-link" aria-current="page" to="/about">About</RouterLink>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods : {
    route(ref){
      window.location.href = ref;
    }
  },
}
</script>

<style lang="less" scoped>
@import "../../public/style/main.less";
</style>