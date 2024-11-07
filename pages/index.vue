<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const hyperlights = ref();

async function getInitialData() {
  hyperlights.value = await getHyperlightsData();
}

async function getHyperlightsData() {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: hyperlights_data, error: getHyperlight } = (await client
        .from("hyperlight")
        .select(
          `*,
          maintag(maintag, img_url),
          comments(*, 
          user:author(user_id, username, avatar_url)),
          profiles(*)`
        )) as any;

      resolve(hyperlights_data);
    } catch (error) {
      reject(error);
    }
  });
}

onBeforeMount(async () => await getInitialData());
</script>
<template>
  <div class="flex flex-col gap-8 max-w-[1920px] mx-auto overflow-hidden">
    <div class="flex flex-col gap-x-8 gap-y-4 xl:flex-row">
      <!-- <AsideList :hashtag-list="hashtagList" /> -->
      <!-- <p>{{ hyperlights }}</p> -->
      <div class="flex flex-col gap-8" v-if="hyperlights">
        <Shortvideo :shortvideo="hyperlights" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
