<template>
  <div>
    <footer>
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