<template>
    <NavBar/>
    <LoadingAnimation/>
    <h1>Regeln und Impressum</h1>
    <h2>Regeln</h2>
    <h3>Blatt</h3>
    <p>Es wird mit einem beliebigen Blatt gespielt.
      <br>Bei mehr Spielern kann auch mit zwei Kartensets gespielt werden.
    </p>

    <h3>Spielverlauf</h3>
    <p>Zu Beginn werden alle Karten möglichst gleichmäßig an die Spieler verteilt.

      <br>Reihum spielen die Spieler Karten aus. Der Spieler, der herauskommt (als erster eine Karte legt),
      <br>darf entscheiden, ob er eine einzelne Karte oder einen Mehrling (mehrere Karten mit gleichem Zahlenwert) legt.
      <br>Ein Spieler darf stets passen oder gleich viele Karten eines höheren Werts auf die bislang ausgespielten ausspielen.
      <br>Wer den höchsten Wert ausgespielt hat, wenn alle anderen Spieler gepasst haben, gewinnt den Stich und darf erneut herauskommen.
      <br>Sobald ein Spieler keine Karten mehr hat, wird er mit dem höchsten noch übrig gebliebenen Amt belohnt.
      <br>Der erste Spieler wird König (oder Präsident/Boss/Chef) genannt, der zweite Vizekönig (oder Vizepräsident/-boss/-chef) usw. Der letzte Spieler wird Bettler,
      <br>der vorletzte Vize-Bettler usw.
      <br>Legt ein Spieler seine letzten Karten ab und werden diese auch nicht überstochen,
      <br>ist es das Privileg des amtierenden Bettlers, als Nächstes auszuspielen.</p>

    <h3>Drücken</h3>

    <p>Zur nächsten Spielrunde teilt der Bettler erneut alle Karten aus. Nun wird „gedrückt“:
      <br>Allgemein müssen die Spieler mit niedrigeren Ämtern ihre höchsten Karten an die Spieler mit höheren Ämtern abgeben,
      <br>während sie dafür die niedrigsten Karten ihrer Mitspieler bekommen. Der Bettler gibt also seine höchsten Karten
      <br>(Anzahl variiert je nach Anzahl Mitspieler) an den König, dieser seine niedrigsten an den Bettler; dasselbe gilt für Vize-König und Vize-Bettler usw.,
      <br> wobei man vielerorts als (Vize-)König aber auch wählen kann, welche Karten man dem (Vize-)Bettler abnehmen will. Der Bettler beginnt die neue Runde.
      <br>Da bei ungerader Spielerzahl ein Spieler übrig bleibt, wird dieser Spieler zum Bauer, Bürger, Kaufmann oder als technischer Begriff auch Medium ernannt
      <br>und behält entweder seine Karten oder darf mit den (wegen der ungeraden Spieleranzahl) übrig gebliebenen Karten drücken (siehe Varianten).</p>

    <h3>Spielende</h3>

    <p>Ein Spiel endet, wenn der vorletzte Spieler seine Karten losgeworden ist und somit alle „Ämter“ vom „König“ bis zum „Bettler“ verteilt worden sind.
      <br>Der Verlierer, „der Bettler“, mischt die Karten und teilt den Kartenstapel wieder für die nächste Runde aus.</p>



    <div class='impressum'><h2>Impressum</h2><p>Angaben gemäß § 5 TMG</p><p><strong>Spiel Bettler</strong><br>

    </p><p> <strong>Vertreten durch: </strong><br>
      maxim binder<br>
      lukas dötterl<br>
    </p><p><strong>Kontakt:</strong><br>
      Telefon: +49 007 420691337<br>
      E-Mail: <a href='mailto:maxim.binder&commat;web.de'>maxim.binder&commat;web.de</a></p><br>
      Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a>
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "About",
  components: {
    NavBar
  },
  methods: {
    route() {
      this.$router.push("/about");
    }
  },
}
</script>

<style lang="less" scoped>
@import "../../public/style/main.less";
</style>