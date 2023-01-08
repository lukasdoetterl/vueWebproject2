<template>
  <input type="image" class="playingBoard player1 img-fluid displayedCard spacingright" src="/images/cards/{{card}}.png" id={{card}}>
</template>

<script>
export default {
  props: ['card'],

}
</script>

<style scoped>

</style>