<script setup lang="ts">
import { useToast } from "primevue/usetoast";
const toast = useToast();
const darkMode = ref(true);
const rightVisible = ref(false);

function showNotification(
  head: string,
  message: string,
  type: "success" | "error"
) {
  toast.add({
    severity: type,
    summary: head,
    detail: message,
    life: 3000,
  });
}
</script>

<template>
  <LayoutNav
    @show-notification="showNotification"
    @show-sidebar="rightVisible = true"
  />
  <LayoutSidebar
    @update-theme="darkMode = !darkMode"
    @show-notification="showNotification"
  />
  <main
    class="pt-0 pl-0 border-1 border-white w-screen min-h-screen xl:pt-[60px] sm:pl-[60px] overflow-hidden"
  >
    <div
      class="flex flex-col items-center min-h-screen z-0 text-[#21EA59] transition xl:p-8 xl:min-h-[calc(100vh-60px)]"
      :class="darkMode ? 'bg-[#111]' : 'bg-[#fff]'"
    >
      <slot />
    </div>
    <Sidebar v-model:visible="rightVisible" position="right">
      <CreateSide />
    </Sidebar>
  </main>
</template>
<style scoped></style>
