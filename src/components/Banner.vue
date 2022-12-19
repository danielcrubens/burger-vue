<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>

  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
#main-banner {
  background-image: url("../assets/img/burger.webp");
  width: 100%;
  background-position: center;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: start;

  h1 {
    color: $text;
    text-align: center;
    padding: 1.5rem 3.1rem;
    font-size: 2.6rem;
    background: $h1;

  }
}
</style>