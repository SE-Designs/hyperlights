<script setup lang="ts">
const activeCard = ref(0);

const props = defineProps({
  hashtagList: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <aside
    id="recent"
    class="w-520px h-680px flex flex-col gap-y-2 bg-[#555] rounded-3xl p-4 overflow-y-auto scroll-smooth"
  >
    <div :class="activeCard === 0 ? 'card active-card' : 'card'">
      <div class="flex justify-center items-center">
        <IconUser class="icon-wrapper bg-black" />
        <h6 class="text-lg font-secondary">For You</h6>
      </div>
    </div>
    <div :class="activeCard === 1 ? 'card active-card' : 'card'">
      <div class="flex justify-center items-center">
        <IconLightning class="icon-wrapper bg-black" />
        <h6 class="text-lg font-secondary">Newest</h6>
      </div>
    </div>
    <div :class="activeCard === 2 ? 'card active-card' : 'card'">
      <div class="flex justify-center items-center">
        <IconTrending class="icon-wrapper bg-black" />
        <h6 class="text-lg font-secondary">Trending</h6>
      </div>
    </div>
    <div class="card" v-for="item in props.hashtagList">
      <div class="flex justify-center items-center">
        <IconHash class="icon-wrapper bg-[#222]" />
        <h6 class="text-lg font-secondary">{{ item }}</h6>
      </div>
    </div>
  </aside>
</template>
<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 0.5rem;
  border: 1px solid transparent;

  background-color: rgba(51, 51, 51, 0.8);
  cursor: pointer;

  transition: all 0.2s;

  & .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    width: 40px;
    height: 40px;
    max-width: 40px;
    max-height: 40px;
    min-width: 40px;
    min-height: 40px;

    border-radius: 50%;

    margin-right: 1rem;
  }

  &:hover {
    border: 1px solid #21ea59;
    text-decoration: underline;
    background-color: rgba(51, 51, 51, 1);
  }

  &.active-card {
    border: 1px solid #21ea59;
    text-decoration: underline;
    background-color: rgba(24, 24, 24, 1);
  }
}

@media only screen and (max-width: 1720px) {
  #recent {
    display: none;
  }
}
</style>
