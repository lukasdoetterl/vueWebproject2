<style lang="less" scoped>
@import "../../public/style/playerView.less";

</style>
<template>






  <div class="container-fluid, spacingleft">
    <!-- main container -->
    <!-- Display the Game Message with primary alert-->



    <div class="container, spacingtop">
      <div class="row">
        <div class="col">

        </div>
        <div class="col">

        </div>
        <div class="col">

        </div>
      </div>



      <!-- Main Button Control Group-->

      <br>
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="alert alert-info alert-dismissible fade show"  role="alert">
                <strong>Message :</strong> <p id="messageDisplay" ></p>
              </div>
            </div>
          </div>

          <button id= "currentPlayerButton" type="button" class="btn btn-primary spacingright">
            Current Player: <span class="badge badge-info"></span>
            <span class="sr-only"></span>
          </button>

          <button type="button" class="btn btn-outline-warning spacingright" @click="startGame()" data-bs-toggle="tooltip" data-bs-placement="top" title="Starts a Complete new Game(for match use next Round)">Start new Game</button>
          <button type="button" class="btn btn-outline-danger spacingright" @click="backToLobby()" data-bs-toggle="tooltip" data-bs-placement="top" title="Exit the Game(no save)">Exit</button>

          <br> <br> <br>
          <!-- Player 1 -->
          <div class="test" id = "endplayer1"> </div> <br>
          <!-- Board -->
          <div class="test"  id = "endboard"> </div> <br>

          <!-- Player 2 -->
          <div class="test"  id = "endplayer2"> </div><br>

          <br>
          <!-- Gameplay Buttons-->
          <button type="button" class="btn btn-outline-success spacingright" @click="playSelectedCards()" data-bs-toggle="tooltip" data-bs-placement="top" title="Play the Cards you have selected">Play Cards</button>
          <button type="button" class="btn btn-outline-secondary spacingright" @click="skip()" data-bs-toggle="tooltip" data-bs-placement="top" title="Skip your current turn if you dont want to or cant play">Skip</button>
          <button type="button" class="btn btn-outline-secondary spacingright" @click="nextRound()" data-bs-toggle="tooltip" data-bs-placement="top" title="play the next Round(after someone has won)">Next Round</button>

          <br>
        </div>



      </div>
    </div>


  </div>

</template>


<script>
import NavBar from "../components/NavBar.vue";
import Card from "../components/Card.vue";
import {get_it, post_it} from "../main.js";
import $ from 'jquery'


export default {
  name: "game",
  components: { NavBar, Card},
  data() {
    return {

      res: '/getJson',
      cards: [],
      selectedCards: "",
    }
  },
  methods: {
    route() {
      this.$router.push("/Game_OneScreen");
    },
    async updateGame(url) {
      this.res = await post_it(url);
      if (this.res.ok) {
        await this.createCards(await this.res.json())
      } else {
        console.log("page failed loading");
      }
    },
    async getJSON(url) {
      $.ajax({
        method: "GET",
        url: "http://localhost:9000" + url,
        dataType: "json",

        success:  (result) => {
          console.log("success");
          console.log(result);
          this.createCards(result);

        }
      });
    },
    createSingleCard(symbol, value, turn, player) {
      let card = symbol + value;
      const newDiv = document.createElement("input");
      newDiv.setAttribute("type", "image");
      newDiv.setAttribute("class", "playingBoard player1 img-fluid displayedCard spacingright");
      //set im src attribure

      newDiv.setAttribute("src", "/images/cards/" + card + ".png");
      newDiv.setAttribute("id", card);
      //make a space between the cards

      newDiv.setAttribute("style", "width: 10em;");
      newDiv.setAttribute("style", "height: 10em;");


      //add the fucntion addCard to the onclick event


      newDiv.onclick = sucess => {
        this.addCard(card, turn, player);
      };
      return newDiv;

    },
    async createCards(json) {

      let turn = json.turn + 1;
      var i = 0
      let x = ""
      document.querySelectorAll('.playingBoard').forEach(e => e.remove());


      for (let i in json.player1.karten) {
        let symbol = json.player1.karten[i].symbol;
        let value = json.player1.karten[i].value;

        let cCard = this.createSingleCard(symbol, value, turn, 1);
        let originalDiv = $('#endplayer1')[0];

        originalDiv.parentNode.insertBefore(cCard, originalDiv);


      }


      for (let i in json.player2.karten) {
        let symbol = json.player2.karten[i].symbol;
        let value = json.player2.karten[i].value;

        let cCard = this.createSingleCard(symbol, value, turn, 2);
        let originalDiv = $('#endplayer2')[0];
        originalDiv.parentNode.insertBefore(cCard, originalDiv);
      }




      if (!(json.board.anzahl == 0)) {
        for (let i in json.board.karten) {
          let symbol = json.board.karten[i].symbol;
          let value = json.board.karten[i].value;
          let cCard = this.createSingleCard(symbol, value, turn, 1);
          let originalDiv = $('#endboard')[0];


          originalDiv.parentNode.insertBefore(cCard, originalDiv);
        }
      }


      $('#currentPlayerButton')[0].textContent = turn;


      let player2Cards = json.player2.karten
      let boardCards = json.board.karten

      let message = json.message
      $('#messageDisplay')[0].textContent = message;

    },
    async skip() {
      const req = "/2Pskip";
      await this.updateGame(req);


    },
    async nextRound() {
      const req = "/nextround2P";
      await this.updateGame(req);


    },
    addCard(card, currentTurn, asker) {
      console.log(this.selectedCards);
      if (currentTurn == asker) {
        if (!this.selectedCards.includes(card)) {
          this.selectedCards = this.selectedCards + " " + card

          document.getElementById(card).style.border = '5px solid #FF0000';

        } else {
          this.selectedCards = this.selectedCards.replace(card, "")
          if (this.selectedCards[0].includes(" ")) {
            this.selectedCards = this.selectedCards.replace(" ", "")
          }


          const theImg = document.getElementById(card);
          theImg.style.border = "";


        }
      }


    },
    async startGame() {
      await this.getJSON("/startVueGame");

    },
    async playSelectedCards() {

      if ((this.selectedCards !== "")) {
        const req = "/playCard2P/" + this.selectedCards;
        await this.updateGame(req);
        this.selectedCards = "";
      }


    },
    backToLobby() {
      window.location.href = "/lobby";
    },},}




</script>
