<template>
    <NavBar />

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card  h-100" >
            <img class="card-img-top" src="public/images/pictures/playingcards.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Start!</h5>
              <p class="card-text">Go here to Start a PvP (Player versus Player) Game of Bettler where two People play against each other </p>
              <a href="/b" class="btn btn-outline-info">Go</a>
            </div>
          </div>
        </div>


        <div class="col-sm">
          <div class="card h-100" >
            <img class="card-img-top" src="public/images/pictures/rules.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Rules ?</h5>
              <p class="card-text">If you are unsure about The Rules of the Game u can go here to check them out before u start Playing</p>
              <a href="/about" class="btn btn-outline-info">Unsure?</a>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card h-100">
            <img class="card-img-top" src="public/images/pictures/info.png" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Infos</h5>
              <p class="card-text">Set A Reminder for A Game of "Bettler ?"
                <vaadin-date-picker placeholder="Pick a date">
                </vaadin-date-picker>
              </p>
              <a href="#" class="btn btn-outline-info">Learn Something</a>
            </div>
          </div>


        </div>


      </div>


      <br>

      <vaadin-icon icon="vaadin:phone"></vaadin-icon>


    </div>


</template>

<script>
import NavBar from "../components/NavBar.vue";
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';




export default {
  name: "Home",
  components: {
    NavBar
  },
  methods: {
    route() {
      this.$router.push("/home");
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../public/style/home.less";
</style>