<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

const user = useSupabaseUser();
const client = useSupabaseClient();
const avatarFile = ref();

// const { data, error } = await supabase
//   .storage
//   .from('avatars')
//   .upload('public/avatar1.png', avatarFile, {
//     cacheControl: '3600',
//     upsert: false
//   })

const onUpload = (file: any) => {
  console.log(file);
};
</script>
<template>
  <div class="flex flex-col w-full">
    <h1>Settings</h1>
    <div class="flex flex-col gap-2 mt-4">
      <label for="avatar">Avatar</label>
      <FileUpload
        ref="avatarFile"
        id="avatar"
        mode="basic"
        name="avatar"
        :file-limit="1"
        :multiple="false"
        accept="image/*"
        @upload="onUpload"
        :maxFileSize="5000000"
        :auto="true"
        chooseLabel="Browse"
        aria-describedby="avatar-help"
      >
        <template #uploadicon>
          <IconUpload class="mr-4" />
        </template>
      </FileUpload>
      <small id="avatar-help">Max file size 5 MB</small>
      {{ avatarFile }}
    </div>
  </div>
</template>
<style scoped></style>
