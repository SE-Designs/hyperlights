<script setup lang="ts">
const client = useSupabaseClient();
const emit = defineEmits(["showNotification"]);
const router = useRouter();

const formValue = ref({
  login: "",
  email: "",
  password: "",
});

async function submitForm() {
  console.log(formValue.value);

  try {
    const { data, error } = await client.auth.signUp({
      email: formValue.value.email,
      password: formValue.value.password,
      options: {
        data: {
          login: formValue.value.login,
        },
      },
    });

    if (error) throw error;

    emit(
      "showNotification",
      "Account was created",
      "Check your email to confirm your account",
      "success"
    );
    router.push("/auth#sign-in");
  } catch (error) {
    emit(
      "showNotification",
      "Account was not created",
      "Please try again...",
      "error"
    );
  }
}
</script>
<template>
  <form novalidate class="flex flex-col gap-4" @submit.prevent="submitForm">
    <Toast />
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
      type="submit"
      severity="primary"
      class="mt-4 font-secondary-bold uppercase justify-center"
      >Sign Up</Button
    >
  </form>
</template>
<style scoped></style>
