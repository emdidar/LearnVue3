<script setup>
  //import {data} from './data/data.js'
  import data from './data/data'
</script>

<template>
  <div class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <h1 class="text-4xl">{{ data.message }}</h1>
    <h2 class="mt-10 text-xl text-gray-700">Today is <span>{{ data.getDate }}</span></h2>
    <p class="mt-10 text-xl text-gray-700">I have <span>{{ data.tasks.length }}</span> for Today</p>
  </div>
</template>

<style scoped>
</style>
