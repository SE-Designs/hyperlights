<script setup lang="ts">
const props = defineProps({
  comments: {
    type: Array,
    required: true,
  },
}) as any;

const emits = defineEmits(["send-comment"]);

const commentInput = ref();

function submit() {
  emits("send-comment", commentInput.value);
}
</script>
<template>
  <div
    id="comments"
    class="w-full hidden flex-col justify-between items-center flex-1 gap-8 max-w-[360px] bg-[#555] rounded-2xl p-8 h-full xl:flex"
  >
    <div
      id="some-comments"
      class="flex flex-col justify-end items-center gap-4 h-full w-full text-center"
      v-if="props.comments.length > 0"
    >
      <div
        class="flex flex-col gap-2 p-4 rounded-lg w-full bg-[#333]"
        v-for="item in props.comments"
        :key="item.id"
      >
        <div class="flex flex-row gap-x-4 flex-1 w-full">
          <img
            v-if="item.user.avatar_url"
            class="h-32px w-32px rounded border border-solid border-[#21ea59] p-2px"
            :src="item.user.avatar_url"
            alt=""
          />
          <h6 class="font-secondary-bold text-lg">
            {{ item.user.username }}
          </h6>
        </div>
        <p class="text-left text-white">{{ item.comment }}</p>
      </div>
    </div>
    <div
      id="no-comments"
      class="flex flex-col justify-center items-center h-full text-center"
      v-else
    >
      <h5 class="font-secondary-bold text-xl text-white">No comments yet</h5>
      <p class="font-secondary-bold text-white op-50">
        Be the first one, who will do it :D
      </p>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex flex-row items-start gap-x-4">
        <Textarea
          v-model="commentInput"
          class="h-42px w-full"
          @keydown.enter="submit"
        />
        <Button
          label="Submit"
          class="flex justify-center items-center"
          @click="submit"
        >
          <IconSend class="w-16px min-w-16px h-16px min-h-16px" />
        </Button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@media only screen and (max-width: 1024px) {
  #comments {
    margin: 0 20px 20px 20px;
    width: 100%;
  }
}

@media only screen and (orientation: portrait) and (max-width: 1280px) {
  #comments {
    display: flex;
    min-width: calc(100vw - 80px);
    margin: 0 auto 20px auto;
  }
}

@media only screen and (max-width: 480px) and (min-height: 600px) {
  #comments {
    display: flex;
  }
}

@media only screen and (min-width: 1280px) and (min-height: 600px) {
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
