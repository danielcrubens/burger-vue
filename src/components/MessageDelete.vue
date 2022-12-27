<template>
  <div>
    <div class="message-container">
      <p> {{ msg }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name:'MessageDelete',
  props:{
    msg:String
  }
}
</script>

<style lang="scss" scoped>
$color:#b71c1c;
$bg:#f8d7da;
$border:#f48fb1  ;
.message-container{
  color:$color;
  background: $bg;
  border:0.12rem solid $border;
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