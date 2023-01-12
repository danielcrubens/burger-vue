<template>
  <div>
    <footer v-if="is404">
      <p>Burger Vue &copy; {{currentYear}} </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    is404() {
      return !this.$route.meta.is404;
    }
  }
}
</script>


<style lang="scss" scoped>
footer {
  background: $bg;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: $text;
  }
}
</style>