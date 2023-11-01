<script setup lang="ts">
const formValue = ref({
  login: undefined,
  password: undefined,
});

const router = useRouter();

function submitForm() {
  console.log(formValue.value);

  router.push("/");
}
</script>
<template>
  <form novalidate class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="login-input">Login / Email</label>
      <InputText id="login-input" v-model="formValue.login" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="password-input">Password</label>
      <Password
        id="password-input"
        v-model="formValue.password"
        toggleMask
        :feedback="false"
      />
    </div>
    <Button
      severity="primary"
      class="mt-4 font-secondary-bold uppercase justify-center"
      @click="submitForm"
      >Sign In</Button
    >
    <hr class="w-full h-px bg-[#222] text-[#222]" />
    <div class="flex flex-col text-center">
      <small>Forgot the password?</small>
      <p class="text-[12px] text-[#21EA59] underline cursor-pointer">
        Click here
      </p>
    </div>
  </form>
</template>
<style scoped></style>
