<script setup lang="ts">
const darkMode = ref(true);
</script>

<template>
  <LayoutNav />
  <LayoutSidebar @update-theme="darkMode = !darkMode" />
  <main
    class="pt-0 pl-0 border-1 border-white w-screen min-h-screen xl:pt-[60px] sm:pl-[60px]"
  >
    <div
      class="flex items-center min-h-screen z-0 text-[#21EA59] transition xl:p-8 xl:min-h-[calc(100vh-60px)]"
      :class="darkMode ? 'bg-[#111]' : 'bg-[#fff]'"
    >
      <slot />
    </div>
  </main>
</template>
<style scoped></style>
