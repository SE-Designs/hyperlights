<script setup lang="ts">
const client = useSupabaseClient();
const emit = defineEmits(["update-theme", "showNotification"]);
const router = useRouter();

function updateTheme() {
  emit("update-theme");
}

async function logout() {
  try {
    const { error } = await client.auth.signOut();

    if (error) throw error;

    emit(
      "showNotification",
      "You are logged out",
      "You have successfully logged out",
      "success"
    );
    router.push("/auth#sign-in");
  } catch (error) {
    emit(
      "showNotification",
      "Failed to logout",
      "Please try again...",
      "error"
    );
  }
}
</script>
<template>
  <aside
    class="hidden flex-col justify-between items-center fixed overflow-y-auto overflow-x-hidden top-0 left-0 w-[60px] pt-4 h-full text-white bg-black gap-y-8 z-30 sm:flex xl:top-[60px] xl:h-[calc(100vh-60px)]"
  >
    <div class="absolute top-0 right-0 w-px h-full bg-[#222]"></div>
    <div class="flex flex-col items-center gap-y-2">
      <NuxtLink to="/">
        <IconHome class="sidelink" />
      </NuxtLink>
      <NuxtLink to="/">
        <IconSubscriptions class="sidelink" />
      </NuxtLink>
      <NuxtLink to="/">
        <IconDiscover class="sidelink" />
      </NuxtLink>
      <hr class="bg-[#333] text-[#333] w-[32px]" />
      <NuxtLink class="avatar" to="/profile/someuser">
        <img src="https://avatarfiles.alphacoders.com/452/45206.jpg" alt="" />
      </NuxtLink>
      <NuxtLink class="avatar" to="/profile/someuser">
        <img
          src="https://avatarfiles.alphacoders.com/846/thumb-84665.jpg"
          alt=""
        />
      </NuxtLink>
      <NuxtLink class="avatar" to="/profile/someuser">
        <img
          src="https://i.pinimg.com/236x/40/a1/ac/40a1ac9579adba4b592a15bcea8f0e18.jpg"
          alt=""
        />
      </NuxtLink>
      <NuxtLink class="avatar" to="/profile/someuser">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f370ee106914163.5ff7b7a6a1881.jpg"
          alt=""
        />
      </NuxtLink>
      <NuxtLink class="avatar" to="/profile/someuser">
        <img
          src="https://avatarfiles.alphacoders.com/274/thumb-274387.jpg"
          alt=""
        />
      </NuxtLink>
      <NuxtLink class="avatar" to="/profile/someuser">
        <img
          src="https://avatarfiles.alphacoders.com/323/thumb-323310.png"
          alt=""
        />
      </NuxtLink>
      <NuxtLink
        class="avatar flex justify-center items-center"
        to="/profile/mixture"
      >
        <IconPlus />
      </NuxtLink>
    </div>
    <div class="flex flex-col justify-between items-center gap-y-2 mb-4">
      <IconMoon class="sidelink" @click="updateTheme" />
      <NuxtLink to="/settings">
        <IconSettings class="sidelink" />
      </NuxtLink>
      <hr class="bg-[#333] text-[#333] w-[32px]" />
      <NuxtLink to="/auth">
        <IconLogout class="sidelink" @click="logout" />
      </NuxtLink>
    </div>
  </aside>
</template>
<style scoped>
.avatar {
  width: 40px;
  height: 40px;

  border: 2px solid #555;
  border-radius: 99px;
  cursor: pointer;

  overflow: hidden;

  transition: border-color 0.2s;
}

.sidelink {
  width: 40px;
  height: 40px;
  padding: 10px;

  color: rgba(255, 255, 255, 0.6);
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;

  transition: all 0.2s;
}

.sidelink:hover {
  border-radius: 5px;
  border-color: #777;
  color: rgba(255, 255, 255, 1);
  background-color: #1b1b1b;
}

.sidelink:focus {
  border-color: #21ea59;
}

.avatar:hover {
  border-color: #21ea59;
}

img {
  width: 100%;
  height: 100%;

  padding: 4px;

  border-radius: 99px;
}
</style>
