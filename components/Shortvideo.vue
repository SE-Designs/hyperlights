<script setup lang="ts">
import { AudioPlayer, VideoPlayer } from "vue-md-player";
import video from "@/assets/video.mp4";
import "vue-md-player/dist/style.css";

const videoRef = ref();
</script>
<template>
  <section
    class="w-full flex flex-col gap-x-8 justify-center items-center rounded-3xl bg-[#333] gap-y-4 xl:flex-row xl:p-4 2xl:p-8"
  >
    <div class="flex flex-col flex-1">
      <div
        id="shortvideo"
        class="relative flex justify-center items-center bg-black rounded-2xl relative cursor-pointer"
      >
        <div
          class="flex justify-center items-center max-w-48px max-h-48px w-48px h-48px min-w-48px min-h-48px rounded-full bg-[#333] op-50 p-4 centerize"
        >
          <IconPlay class="text-white w-full h-full" />
        </div>
        <video-player
          ref="videoRef"
          autoplay
          preload
          loop
          playsinline
          class="max-w-screen max-h-screen w-full h-auto block rounded-xl"
          :src="video"
        />
        <div id="inner-details" class="w-full h-full absolute">
          <div
            class="absolute right-0 bottom-50% translate-y-1/2 w-fit flex flex-col gap-y-4 mr-20px"
          >
            <div class="action-btn-mobile">
              <IconLightning />
            </div>
            <div class="action-btn-mobile">
              <IconChat />
            </div>
            <div class="action-btn-mobile">
              <IconBookmark />
            </div>
            <div class="action-btn-mobile">
              <IconShare />
            </div>
            <div class="action-btn-mobile">
              <IconDots />
            </div>
          </div>
          <div
            class="flex absolute left-0 bottom-0 flex-col gap-y-2 mt-4 px-8 pl-8 pr-8 pb-8 pt-4"
          >
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row items-center gap-x-4">
                <h3 class="font-main-bold text-3xl">It's Hyperlights</h3>
              </div>
            </div>
            <div class="flex flex-row gap-x-2 items-center">
              <div class="maintag-set">
                <img
                  src="https://img.championat.com/news/big/p/y/v-dota-2-poyavilsya-pervyj-chestnyj-igrok-s-grandmasterom-na-marci-viktoriya-bonya_1637747390104987094.jpg"
                  alt=""
                />
                <h6 class="font-secondary-bold text-lg">mixturegg</h6>
              </div>
              <div class="maintag-set">
                <img
                  src="https://st5.depositphotos.com/69187398/66863/v/450/depositphotos_668639280-stock-illustration-counter-strike-shooting-game-go1.jpg"
                  alt=""
                />
                <h6 class="font-secondary-bold text-lg">CS:GO</h6>
              </div>
              <div class="flex flex-row items-center gap-x-2 ml-4">
                <div class="hashtag-set">
                  <IconHash
                    class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]"
                  />
                  <p class="font-secondary-bold">Ace</p>
                </div>
                <div class="hashtag-set">
                  <IconHash
                    class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]"
                  />
                  <p class="font-secondary-bold">Ak47</p>
                </div>
                <div class="hashtag-set">
                  <IconHash
                    class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]"
                  />
                  <p class="font-secondary-bold">Dust2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="outer-details" class="hidden flex-col gap-y-2 mt-4 p-4 pb-6">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center gap-x-4">
            <h3 class="font-main-bold text-3xl">It's Hyperlights</h3>
          </div>
          <div class="flex flex-row items-center gap-x-2">
            <div class="action-btn">
              <p class="font-secondary text-sm">249</p>
              <IconLightning class="w-14px h-14px" />
            </div>
            <div class="action-btn">
              <p class="font-secondary text-sm">12</p>
              <IconBookmark class="w-14px h-14px" />
            </div>
            <div class="action-btn">
              <p class="font-secondary text-sm">4</p>
              <IconShare class="w-14px h-14px" />
            </div>
            <div class="action-btn">
              <IconDots class="w-14px h-14px" />
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap flex-row gap-x-4 gap-y-2 justify-between items-center"
        >
          <div class="flex flex-row gap-x-2 items-center mr-4">
            <NuxtLink to="/profile/mix" class="maintag-set">
              <img
                src="https://img.championat.com/news/big/p/y/v-dota-2-poyavilsya-pervyj-chestnyj-igrok-s-grandmasterom-na-marci-viktoriya-bonya_1637747390104987094.jpg"
                alt=""
              />
              <h6 class="font-secondary-bold text-lg">mixturegg</h6>
            </NuxtLink>
            <NuxtLink to="/" class="maintag-set">
              <img
                src="https://st5.depositphotos.com/69187398/66863/v/450/depositphotos_668639280-stock-illustration-counter-strike-shooting-game-go1.jpg"
                alt=""
              />
              <h6 class="font-secondary-bold text-lg">CS:GO</h6>
            </NuxtLink>
          </div>
          <div class="flex flex-row items-center gap-x-2">
            <NuxtLink to="/" class="hashtag-set">
              <IconHash class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]" />
              <p class="font-secondary-bold text-sm">Ace</p>
            </NuxtLink>
            <NuxtLink to="/" class="hashtag-set">
              <IconHash class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]" />
              <p class="font-secondary-bold text-sm">Ak47</p>
            </NuxtLink>
            <NuxtLink to="/" class="hashtag-set">
              <IconHash class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]" />
              <p class="font-secondary-bold text-sm">Dust2</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      id="comments"
      class="w-full hidden flex-col justify-center items-center flex-1 max-w-[360px] bg-[#555] rounded-2xl h-full xl:flex"
    >
      <div id="no-comments" class="p-8 text-center">
        <h5 class="font-secondary-bold text-xl text-white">No comments yet</h5>
        <p class="font-secondary-bold text-white op-50">
          Be the first one, who will do it :D
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
#shortvideo {
  width: 100%;
  height: fit-content;
}

.maintag-set {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.8);

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  padding: 4px 8px;
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 1);

    background-color: rgba(0, 0, 0, 1);
  }

  & img {
    width: 26px;
    min-width: 26px;
    height: 26px;
    min-height: 26px;
    border-radius: 99px;
    padding: 2px;

    border: 1px solid #21ea59;
  }
}

.hashtag-set {
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.6);

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  padding: 4px 8px;
  border-radius: 6px;

  transition: all 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 1);

    background-color: rgba(0, 0, 0, 1);
  }
}

.action-btn {
  height: 32px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;

  padding: 6px;
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.active {
  color: #21ea59;
}

.action-btn-mobile {
  width: 40px;
  height: 40px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.2);

  padding: 4px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

@media only screen and (max-width: 1024px) {
  #shortvideo {
  }
}

@media only screen and (orientation: portrait) and (max-width: 1280px) {
  #inner-details {
    display: none;
  }

  #outer-details {
    display: flex;
  }

  #comments {
    display: flex;
    min-width: calc(100vw - 40px);
    margin: 0 auto 20px auto;
  }
}

@media only screen and (orientation: landscape) and (max-width: 1280px) {
  #inner-details {
    display: flex;
  }

  #outer-details {
    display: none;
  }
}

@media only screen and (max-width: 480px) and (min-height: 600px) {
  #shortvideo {
    /*  */
  }

  #inner-details {
    display: none;
  }

  #outer-details {
    padding: 1rem 1rem 2rem 1rem;
    display: flex;
  }

  #comments {
    display: flex;
  }
}

@media only screen and (min-width: 1280px) and (min-height: 600px) {
  #inner-details {
    display: none;
  }

  #outer-details {
    padding: 0;
    display: flex;
  }

  #comments {
    display: flex;
  }
}

@media only screen and (min-width: 1280px) and (max-height: 600px) {
  #comments {
    display: none;
  }
}
</style>
