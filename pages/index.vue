<script setup lang="ts"></script>
<template>
  <div class="flex flex-col gap-8 max-w-[1920px] mx-auto overflow-hidden">
    <div class="flex flex-col gap-x-8 xl:flex-row">
      <aside
        id="recent"
        class="w-520px h-680px flex flex-col gap-y-2 bg-[#555] rounded-3xl p-4"
      >
        <div class="card">
          <div class="flex justify-center items-center">
            <IconLightning class="icon-wrapper" />
            <h6 class="text-lg font-main-bold">Newest</h6>
          </div>
        </div>
        <div class="card">
          <div class="flex justify-center items-center">
            <IconLightning class="icon-wrapper" />
            <h6 class="text-lg font-main-bold">For You</h6>
          </div>
        </div>
        <div class="card">
          <div class="flex justify-center items-center">
            <IconLightning class="icon-wrapper" />
            <h6 class="text-lg font-main-bold">Trending</h6>
          </div>
        </div>
        <div class="card">
          <div class="flex justify-center items-center">
            <IconLightning class="icon-wrapper" />
            <h6 class="text-lg font-main-bold">Best of the Day</h6>
          </div>
        </div>
        <div class="card">
          <div class="flex justify-center items-center">
            <IconLightning class="icon-wrapper" />
            <h6 class="text-lg font-main-bold">Best of the Week</h6>
          </div>
        </div>
      </aside>
      <Shortvideo />
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 99px;
  padding: 0.5rem;
  border: 1px solid transparent;

  background-color: rgba(51, 51, 51, 0.8);
  cursor: pointer;

  transition: all 0.2s;

  & .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 48px;
    height: 48px;
    max-width: 48px;
    max-height: 48px;
    min-width: 48px;
    min-height: 48px;

    background-color: black;
    border-radius: 50%;

    margin-right: 1rem;
  }

  &:hover {
    border: 1px solid #21ea59;
    background-color: rgba(51, 51, 51, 1);
  }
}

@media only screen and (max-width: 1720px) {
  #recent {
    display: none;
  }
}
</style>
