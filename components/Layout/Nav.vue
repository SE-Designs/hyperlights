<script setup lang="ts"></script>
<template>
  <nav
    class="fixed hidden flex-row items-center top-0 left-0 w-screen h-[60px] bg-[#111] text-white back z-20 xl:flex"
  >
    <div class="absolute top-0 left-0 w-full bg-[#555] h-px"></div>
    <IconMenu
      class="w-[60px] min-w-[60px] max-w-[60px] h-[60px] min-h-[60px] max-h-[60px] p-[20px] cursor-pointer"
    />
    <div class="flex flex-row justify-between items-center w-full">
      <div class="flex flex-row items-center gap-x-8 ml-4">
        <h1 class="font-main-black italic uppercase text-[#21EA59]">
          Hyperlights
        </h1>
        <Button
          class="flex flex-row items-center gap-x-2 max-h-[36px]"
          text
          size="small"
        >
          <IconCategories />
          <p>Categories</p>
        </Button>
      </div>
      <div class="flex flex-row items-center gap-x-4 mr-12px">
        <Button
          class="flex flex-row items-center gap-x-2 max-h-[36px]"
          :outlined="true"
          size="small"
        >
          <IconSearch />
          <p>Search</p>
        </Button>
        <img
          src="https://img.championat.com/news/big/p/y/v-dota-2-poyavilsya-pervyj-chestnyj-igrok-s-grandmasterom-na-marci-viktoriya-bonya_1637747390104987094.jpg"
          alt=""
          class="rounded-sm border border-[#21ea59] w-[36px] h-[36px]"
        />
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full bg-[#333] h-px"></div>
  </nav>
</template>
<style scoped>
nav {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}
</style>
