<template>
  <div>
    <div class="message-container">
      <p> {{ msg }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name:'Message',
  props:{
    msg:String
  }
}
</script>

<style lang="scss" scoped>
$color:#004085;
$bg:#cce5ff;
$border:#b8daff;
.message-container{
  color:$color;
  background: $bg;
  border:0.12rem solid $border;
  border-radius: 0.31rem;
  padding: 0.62rem;
  max-width: 25rem;
  margin: 1.8rem auto;
  text-align: center;
}
</style>