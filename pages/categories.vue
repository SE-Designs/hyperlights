<script setup lang="ts">
const categories = ref([
  {
    name: "Apex Legends",
    img: "",
    url: "",
    number: 249,
  },
  {
    name: "CS 2",
    img: "",
    url: "",
    number: 249,
  },
  {
    name: "CS:GO",
    img: "",
    url: "",
    number: 249,
  },
  {
    name: "Fortnite",
    img: "",
    url: "",
    number: 249,
  },
]);
</script>
<template>
  <div
    class="flex flex-row justify-center items-center gap-8 w-full bg-[#222] rounded-2xl p-8 max-w-[1440px] mx-auto"
  >
    <NuxtLink
      :to="{ name: 'index' }"
      v-for="card in categories"
      :key="card.name"
      class="flex flex-col gap-y-4 bg-[#333] rounded-lg p-8"
    >
      <div class="flex flex-row items-center gap-x-2 text-white">
        <h3 class="font-main-black uppercase text-xl">
          {{ card.name }}
        </h3>
      </div>
      <div class="flex flex-row gap-x-2">
        <IconLightning />
        <p class="font-secondary-bold text-white op-50">
          {{ card.number }} Hyperlights
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped></style>
