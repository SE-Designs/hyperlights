<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();
const emit = defineEmits(["showNotification", "showSidebar"]);
const router = useRouter();
const profileFly = ref(false);

const { data } = client.storage
  .from("avatars")
  .getPublicUrl(`${user.value?.id}.jpg`);

function toggleProfileFly() {
  profileFly.value = !profileFly.value;
}

function toggleSidebar() {
  emit("showSidebar");
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
  <nav
    class="fixed hidden flex-row items-center top-0 left-0 w-screen h-[60px] bg-[#111] text-white back z-20 xl:flex"
  >
    <div class="absolute top-0 left-0 w-full bg-[#555] h-px"></div>
    <IconMenu
      class="w-[60px] min-w-[60px] max-w-[60px] h-[60px] min-h-[60px] max-h-[60px] p-[20px] cursor-pointer"
    />
    <div class="flex flex-row justify-between items-center w-full">
      <div class="flex flex-row items-center gap-x-8 ml-4">
        <h1 class="font-main-black italic uppercase text-[#21EA59]">
          Hyperlights
        </h1>
        <NuxtLink :to="{ name: 'categories' }">
          <Button
            class="flex flex-row items-center gap-x-2 max-h-[36px]"
            text
            size="small"
          >
            <IconCategories />
            <p>Categories</p>
          </Button>
        </NuxtLink>
      </div>
      <div class="flex flex-row items-center gap-x-4 mr-12px">
        <div class="flex flex-row items-center gap-x-2 max-h-36px">
          <div class="p-inputgroup flex-1 cursor-pointer">
            <span class="p-inputgroup-addon">
              <IconSearch />
            </span>
            <Button
              size="small"
              severity="primary"
              outlined
              class="w-520px min-w-0"
              style="border: 1px solid #2c362b; background-color: #111"
              >Search...</Button
            >
            <!-- <InputText size="small" placeholder="Search..." /> -->
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-x-4 mr-12px">
        <div class="flex flex-row items-center gap-x-2">
          <Button
            class="flex flex-row items-center gap-x-2 max-h-[36px]"
            text
            size="small"
            @click="toggleSidebar"
          >
            <IconLightning />
            <p>Create</p>
          </Button>
        </div>
        <img
          :src="data.publicUrl"
          alt=""
          class="rounded-sm border border-[#21ea59] w-[36px] h-[36px] cursor-pointer"
          @click="toggleProfileFly"
        />
      </div>
    </div>
    <div class="fixed right-12px top-72px" v-if="profileFly">
      <div class="flex flex-col gap-y-1 rounded-lg bg-[#555] p-1">
        <NuxtLink
          class="flex flex-row justify-between items-center gap-x-4 bg-[#222] py-2 px-4 rounded-md cursor-pointer"
          :to="/profile/ + `${user?.user_metadata.login}`"
        >
          <IconUser />
          <b>Profile</b>
        </NuxtLink>
        <NuxtLink
          class="flex flex-row justify-between items-center gap-x-4 bg-[#222] py-2 px-4 rounded-md cursor-pointer"
          to="/settings"
        >
          <IconSettings />
          <b>Settings</b>
        </NuxtLink>
        <div
          class="flex flex-row justify-between items-center gap-x-4 bg-[#222] py-2 px-4 rounded-md cursor-pointer"
          @click="logout"
        >
          <IconLogout />
          <b>Logout</b>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full bg-[#333] h-px"></div>
  </nav>
</template>
<style scoped>
nav {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}
</style>
