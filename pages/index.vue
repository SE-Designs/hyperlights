<script setup lang="ts"></script>
<template>
  <div class="flex flex-col gap-8 max-w-[1920px] mx-auto overflow-hidden">
    <div class="flex flex-col gap-x-8 xl:flex-row">
      <div id="recent" class="w-520px h-680px bg-[#555] rounded-3xl"></div>
      <Shortvideo />
    </div>
  </div>
</template>
<style scoped>
@media only screen and (max-width: 1720px) {
  #recent {
    display: none;
  }
}
</style>
