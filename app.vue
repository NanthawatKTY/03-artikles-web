<script setup lang="ts">
  const {
    isDarkMode
  } = useDarkMode()
</script>

<template>
  <div :class="isDarkMode ? 'darkMode' : null">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: Georgia;
  }

</style>