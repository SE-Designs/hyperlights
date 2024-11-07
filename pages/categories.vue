<script setup lang="ts">
const client = useSupabaseClient();

const { data, error } = (await client
  .from("maintag")
  .select(`*, hyperlight(count)`)) as any;
</script>
<template>
  <div
    class="flex flex-row justify-center items-stretch gap-8 w-full rounded-2xl p-8 max-w-[1440px] mx-auto"
  >
    <NuxtLink
      :to="{ name: 'index' }"
      v-for="card in data"
      :key="card.maintag"
      class="w-full flex-1 flex flex-col justify-between gap-y-4 bg-[#333] rounded-lg p-8 relative border border-solid border-[#111] overflow-hidden transition hover:border-[#21ea59]"
    >
      <img
        id="background-img"
        :src="card.img_url"
        class="absolute left-0 top-0 right-0 bottom-0 w100% h100% z-0"
        style="filter: brightness(40%) blur(6px); scale: 1.2"
        alt=""
      />
      <div class="flex flex-row gap-x-2 z-1 text-white">
        <img
          v-if="card.img_url"
          :src="card.img_url"
          class="w32px h32px rounded-full border-px border-[#21ea59]"
          alt=""
        />
        <h3 class="font-main-black uppercase text-xl">
          {{ card.maintag }}
        </h3>
      </div>
      <div class="flex flex-row gap-x-2 z-1">
        <IconLightning />
        <p class="font-secondary-bold text-white op-50">
          {{ Number(card.hyperlight[0].count) }} Hyperlights
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
<style scoped></style>
