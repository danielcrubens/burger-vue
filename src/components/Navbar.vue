<template>
  <div>
    <nav id="nav" v-if="is404">
      <router-link to="/" id="logo-url">
        <img id="logo" :src="logo" :alt="alt"></router-link>
        <ul>
      <router-link to="/">Home</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: ["logo", "alt"],
  computed:{
    is404() {
      return !this.$route.meta.is404;
    }
  }
}
</script>


<style lang="scss" scoped>
nav {
  background-color: $bg;
  -webkit-box-shadow: 0px 11px 8px 5px #000000; 
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  padding: 0.9rem 3.1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  #logo-url {
    margin: 0 auto;
    margin-left: 0;
    img {
      width: 3.5rem;
    }
  }
  ul{
  display: flex;
  a {
    font-weight: 700;
    color: $text;
    text-decoration: none;
    margin: 0 1rem;
    transition: .5s;
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0.1rem;
      background: $link;
      margin: 0 auto;
    }
  	&:hover {
			&::after {
				width: 100%;
				transition: width 300ms ease-in-out;     
			}
		}
    &:hover {
      color: $link;
    }
  }
}
}
</style>