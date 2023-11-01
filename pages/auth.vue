<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const route = useRoute();
const router = useRouter();
const hashFragment = computed(() => route.hash);

const changeHash = (hash: string) => {
  router.push({ hash: hash });
};
</script>
<template>
  <div class="flex flex-row justify-between items-center min-h-screen">
    <div class="hidden flex-1 h-screen overflow-hidden xl:block">
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
        <SignInForm v-if="hashFragment === '#sign-in'" />
        <SignUpForm v-else />
      </div>
      <SignSocial />
    </div>
  </div>
</template>
<style scoped></style>
