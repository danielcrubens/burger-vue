<template>
  <div>
    <div class="message-container">
      <p> {{ alert }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MessageAlert',
  props: {
    alert: String
  }
}
</script>

<style lang="scss" scoped>
$color: #f57f17 ;
$bg: #fff3cd;
$border: #ffe082;

.message-container {
  color: $color;
  background: $bg;
  border: 0.12rem solid $border;
  border-radius: 0.31rem;
  padding: 0.62rem;
  max-width: 25rem;
  margin: 1.8rem auto;
  text-align: center;
  position: absolute;
  top: 7rem;
  right: 5rem;
}
</style>