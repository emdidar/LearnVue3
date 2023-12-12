<script setup>
  const message="Welcome. to Vue JS";
  function getDate(){
    const date=new Date();
    return date.toDateString();
  }
</script>

<template>
  <div class="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <h1 class="text-4xl">{{ message }}</h1>
    <h2 class="mt-10 text-xl text-gray-700">Today is <span>{{ getDate() }}</span></h2>
  </div>
</template>

<style scoped>
</style>
