<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { useToast } from "primevue/usetoast";
const toast = useToast();

const route = useRoute();
const router = useRouter();
const hashFragment = computed(() => route.hash);

const changeHash = (hash: string) => {
  router.push({ hash: hash });
};

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
  <Toast />

  <div
    class="flex flex-row justify-between items-center mx-auto py-8 max-h-[1280px]"
  >
    <div
      class="hidden flex-1 justify-center items-center h-full overflow-hidden xl:flex"
    >
      <video src="~/assets/video.mp4"></video>
    </div>
    <div class="flex-1 flex flex-col justify-center items-center">
      <div class="flex flex-col bg-[#333] rounded-2xl p-8">
        <div class="flex flex-row justify-center items-center gap-4 mb-6">
          <Button
            :severity="hashFragment === '#sign-in' ? 'primary' : 'secondary'"
            :text="hashFragment === '#sign-in' ? false : true"
            :rounded="true"
            size="small"
            @click="changeHash('#sign-in')"
            class="font-main-bold"
            >Sign In</Button
          >
          <Button
            :severity="hashFragment !== '#sign-in' ? 'primary' : 'secondary'"
            :text="hashFragment !== '#sign-in' ? false : true"
            :rounded="true"
            size="small"
            @click="changeHash('#sign-up')"
            class="font-main-bold"
            >Sign Up</Button
          >
        </div>
        <SignInForm
          @showNotification="showNotification"
          v-if="hashFragment === '#sign-in'"
        />
        <SignUpForm @showNotification="showNotification" v-else />
        <SignSocial />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
