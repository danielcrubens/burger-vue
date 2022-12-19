<template>
  <div>
    <div class="modal">
      <div v-if="open" class="overlay">
        <div class="container">
          <p>Hello from the modal!</p>
        </div>
        <button @click="open = false" class="close">&times;</button>
      </div>
    </div>
    <div class="box">
      <button class="btn-1" @click="open = true">Faça seu pedido</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  data() {
    return {
      open: false
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  background: transparent;
  position: relative;
  top: -13rem;
  padding: 1.5rem 3.1rem;

  button {
    cursor: pointer;
    display: block;
    padding: 0.8rem 1.8rem;
    background: linear-gradient(to right, $bg 50%, $link 50%);
    background-size: 200% 100.5%;
    background-position: right bottom;
    font-size:1rem;
    color: $h1;
    border: none;
    border-left: 0.20em solid $bg;
    border-color: none;
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.08);
    transition: all .3s ease-out;

    &:hover {
      background-position: left bottom;
      color: $text;
    }
  }

}

.modal {
  .overlay {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, .7);


    .container {
      background: red;
      width: 300px;
      height: 290px;
    }
  }

  .close {
    position: absolute;
    top: 1.6rem;
    right: 0.5rem;
    width: 2rem;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: $link;
    background: $bg;
    &:hover{
      filter: brightness(1);
    }
  }
}
</style>