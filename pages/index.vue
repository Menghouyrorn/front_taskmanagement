<template>
  <div class="w-full h-screen">
    <div class="uppercase text-xl font-bold text-white">
      Welcome to my website Menghouy
    </div>
    <div
      class="h-[80%] w-full flex items-center gap-y-14 justify-center flex-col"
    >
      <p class="text-6xl font-bold text-white w-[80%] text-center">
        You can manage and create your in this website for free.
      </p>
      <NuxtLink to="/tasks/create">
        <Button class="w-[240px] h-[45px] bg-[#717082] uppercase text-lg"
          >Get Start</Button
        >
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
</style>