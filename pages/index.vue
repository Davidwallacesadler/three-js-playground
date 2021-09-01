<template>
  <div class="app">
    <MyWorld />
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'app-body'
    }
  }
}
</script>

<style scoped>
.app-body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}
</style>
