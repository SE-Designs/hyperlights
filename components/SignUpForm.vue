<script setup lang="ts">
const formValue = ref({
  login: undefined,
  email: undefined,
  password: undefined,
});

const router = useRouter();

function submitForm() {
  console.log(formValue.value);

  router.push("/some-url");
}
</script>
<template>
  <form novalidate class="flex flex-col gap-4">
    <div class="flex flex-col gap-2">
      <label for="login-input">Login</label>
      <InputText id="login-input" v-model="formValue.login" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="login-input">Email</label>
      <InputText id="login-input" v-model="formValue.email" />
    </div>
    <div class="flex flex-col gap-2">
      <label for="password-input">Password</label>
      <Password
        id="password-input"
        v-model="formValue.password"
        toggleMask
        :feedback="true"
      />
    </div>
    <Button
      severity="primary"
      class="mt-4 font-secondary-bold uppercase justify-center"
      @click="submitForm"
      >Sign Up</Button
    >
  </form>
</template>
<style scoped></style>
