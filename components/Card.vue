<script setup lang="ts">
import { Card } from '~~/.nuxt/components';

interface CardProps {
  card: {
    img: string;
    title: string;
    author: string;
  };
}

const { isDarkMode } = useDarkMode();
defineProps<CardProps>();
</script>

<template>
  <div :class="[(isDarkMode ? 'darkMode, dark-card' : 'card')]">
    <img :src="card.img" alt="" />
    <div class="content">
      <h3>{{ card.title }}</h3>
      <p>{{ card.author }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 1px 1px 5px black;
  background-color: white;
  width: 30%;
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden;
}
img {
  width: 100%;
  height: 200px;
}
.content {
  padding: 10px;
}
p {
  margin-top: 10px;
}

/* .darkMode{
    background-color: #000;
    color: white;
  } */
</style>