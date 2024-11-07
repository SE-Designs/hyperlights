<script setup lang="ts">
import { VideoPlayer } from "vue-md-player";
import "vue-md-player/dist/style.css";

const client = useSupabaseClient();
const user = useSupabaseUser();

const props = defineProps({
  shortvideo: {
    type: Array,
    required: true,
  },
}) as any;

const videoRef = ref();
const showingNumber = ref(0);

async function submitComment(value: string, id: number) {
  const comment_data = {
    hyperlight_id: id,
    author: user.value?.id,
    comment: value,
  } as any;

  const { data: comments, error } = (await client
    .from("comments")
    .insert(comment_data)
    .select()) as any;

  console.log(comments);
  console.log(error);
}
</script>
<template>
  <section
    class="w-full flex flex-col gap-x-8 justify-center items-center rounded-3xl bg-[#212121] gap-y-4 xl:flex-row xl:p-4 2xl:p-8"
    v-for="(hyperlight, i) in props.shortvideo"
    :key="hyperlight.id"
  >
    <div class="flex flex-col flex-1 w-full">
      <div
        id="shortvideo"
        class="relative w-full flex justify-center items-center bg-black rounded-2xl relative cursor-pointer"
      >
        <!-- <div
          :class="
            videoRef[i].paused ? 'paused-wrapper' : 'paused-wrapper active'
          "
          @click.prevent="
            videoRef[i].paused ? videoRef[i].play() : videoRef[i].pause()
          "
        >
          <IconPlay class="text-white w-full h-full" />
        </div> -->
        <video-player
          ref="videoRef"
          preload
          loop
          playsinline
          class="max-w-screen max-h-screen w-full h-auto block rounded-xl"
          :src="hyperlight.link"
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
                <h3 class="font-main-bold text-3xl">{{ hyperlight.title }}</h3>
              </div>
            </div>
            <div class="flex flex-row gap-x-2 items-center">
              <div class="maintag-set">
                <img
                  v-if="hyperlight.profiles.avatar_url"
                  :src="hyperlight.profiles.avatar_url"
                  alt=""
                />
                <h6 class="font-secondary-bold text-lg">
                  {{ hyperlight.profiles.username }}
                </h6>
              </div>
              <div class="maintag-set">
                <img
                  v-if="hyperlight.maintag.img_url"
                  :src="hyperlight.maintag.img_url"
                  alt=""
                />
                <h6 class="font-secondary-bold text-lg">
                  {{ hyperlight.maintag.maintag }}
                </h6>
              </div>
              <div class="flex flex-row items-center gap-x-2 ml-4">
                <div
                  class="hashtag-set"
                  v-for="hashtag in hyperlight.hashtags"
                  :key="hashtag"
                >
                  <IconHash
                    class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]"
                  />
                  <p class="font-secondary-bold">{{ hashtag }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="outer-details" class="hidden flex-col gap-y-2 mt-4 p-4 pb-6">
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row items-center gap-x-4">
            <h3 class="font-main-bold text-3xl">{{ hyperlight.title }}</h3>
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
                v-if="hyperlight.profiles.avatar_url"
                :src="hyperlight.profiles.avatar_url"
                alt=""
              />
              <h6 class="font-secondary-bold text-lg">
                {{ hyperlight.profiles.username }}
              </h6>
            </NuxtLink>
            <NuxtLink to="/" class="maintag-set">
              <img
                v-if="hyperlight.maintag.img_url"
                :src="hyperlight.maintag.img_url"
                alt=""
              />
              <h6 class="font-secondary-bold text-lg">
                {{ hyperlight.maintag.maintag }}
              </h6>
            </NuxtLink>
          </div>
          <div class="flex flex-row items-center gap-x-2">
            <NuxtLink
              to="/"
              class="hashtag-set"
              v-for="hashtag in hyperlight.hashtags"
              :key="hashtag"
            >
              <IconHash class="w-[10px] min-w-[10px] h-[10px] min-h-[10px]" />
              <p class="font-secondary-bold text-sm">{{ hashtag }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Comments
      :comments="hyperlight.comments"
      @send-comment="submitComment($event, hyperlight.id)"
    />
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
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);

  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  padding: 4px 8px;
  border-radius: 2px;

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
    border-radius: 4px;
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
  color: rgba(0, 0, 0, 0.6);

  background-color: #21ea59;
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

  padding: 4px 8px;
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  transition: all 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 1);
    background-color: rgba(0, 0, 0, 1);
  }
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

.paused-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 48px;
  max-height: 48px;
  min-width: 48px;
  min-height: 48px;
  width: 100%;
  height: 100%;

  opacity: 1;

  border-radius: 50%;
  background-color: rgba(51, 51, 51, 0.4);
  backdrop-filter: blur(2px);
  padding: 1rem;

  position: absolute;
  transition: all 0.2s;

  z-index: 30;

  &.active {
    transform: scale(0.2);
    opacity: 0;
  }
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
}

@media only screen and (min-width: 1280px) and (min-height: 600px) {
  #inner-details {
    display: none;
  }

  #outer-details {
    padding: 0;
    display: flex;
  }
}
</style>
