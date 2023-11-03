<script setup lang="ts">
const client = useSupabaseClient();

let { data, error } = await client.from("maintag").select("*");
</script>
<template>
  <div
    class="flex flex-row justify-center items-center gap-8 w-full bg-[#222] rounded-2xl p-8 max-w-[1440px] mx-auto"
  >
    {{ data }}
    {{ error }}
    <!-- <NuxtLink
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
    </NuxtLink> -->
  </div>
</template>
<style scoped></style>
