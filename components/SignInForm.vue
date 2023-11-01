<script setup lang="ts">
const client = useSupabaseClient();
const emit = defineEmits(["showNotification"]);
const router = useRouter();

const formValue = ref({
  email: "",
  password: "",
});

async function submitForm() {
  console.log(formValue.value);

  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: formValue.value.email,
      password: formValue.value.password,
    });

    if (error) throw error;

    console.log(error);

    emit(
      "showNotification",
      "You are logged in",
      "You have successfully logged in",
      "success"
    );
    router.push("/");
  } catch (error) {
    emit(
      "showNotification",
      "Failed to login",
      "Email or password is wrong",
      "error"
    );
  }
}
</script>
<template>
  <form novalidate class="flex flex-col gap-4" @submit.prevent="submitForm">
    <div class="flex flex-col gap-2">
      <label for="email-input">Email</label>
      <InputText id="email-input" v-model="formValue.email" />
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
      type="submit"
      severity="primary"
      class="mt-4 font-secondary-bold uppercase justify-center"
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
