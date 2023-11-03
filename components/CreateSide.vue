<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();
// const url =

const formValue = ref({
  fileName: "",
  title: "",
  maintag: "",
  author: user.value?.user_metadata.login,
  hashtags: [],
  video: "",
});

const maintags = ref([
  "CS2",
  "Apex Legends",
  "Fortnite",
  "CS:GO",
  "Dota 2",
  "Warcraft III",
]);

const filteredMaintags = ref();

const search = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredMaintags.value = [...maintags.value];
    } else {
      filteredMaintags.value = maintags.value.filter((maintag) => {
        return maintag.toLowerCase().startsWith(event.query.toLowerCase());
      });
    }
  }, 250);
};

const selectFile = async (event: any) => {
  formValue.value.video = event.files[0];
  formValue.value.fileName = event.files[0].name;
};

async function submitVideo() {
  const { data, error } = await client.storage
    .from("hyperlights")
    .upload(
      `${user.value?.id}/${formValue.value.title}.png`,
      formValue.value.video,
      {
        cacheControl: "3600",
        upsert: false,
      }
    );

  console.log(data);
  console.log(error);
}
</script>
<template>
  <div class="flex flex-col gap-y-8">
    <div class="flex flex-col gap-2">
      <label for="hyperlight">Hyperlight Video</label>
      <FileUpload
        id="hyperlight"
        mode="basic"
        name="hyperlight"
        :file-limit="1"
        :multiple="false"
        accept="video/mp4,video/x-m4v,video/*"
        @select="selectFile"
        :auto="true"
        chooseLabel="Browse"
        aria-describedby="hyperlight"
        class="w-full"
      >
        <template #uploadicon>
          <IconUpload />
        </template>
      </FileUpload>
      <small id="hyperlight-help"
        >Max video length 2 mins, accept: .mp4, .mkv. .avi, .wav</small
      >
    </div>
    <div class="flex flex-col gap-2">
      <label for="username">Hyperlight title</label>
      <InputText
        id="title"
        v-model="formValue.title"
        aria-describedby="title-help"
      />
      <small id="title-help"
        >Hyperlight title will be visible for everyone</small
      >
    </div>
    <div class="flex flex-col gap-2">
      <label for="maintag">Hyperlight Maintag</label>
      <AutoComplete
        id="maintag"
        v-model="formValue.maintag"
        dropdown
        :suggestions="filteredMaintags"
        @complete="search"
        aria-describedby="maintag-help"
      />
      <small id="maintag-help"
        >Hyperlight maintag will be visible for everyone</small
      >
    </div>
    <div class="flex flex-col gap-2">
      <label for="hashtags">Hyperlight Hashtags</label>
      <div class="p-inputgroup flex-1">
        <span class="p-inputgroup-addon">
          <IconHash />
        </span>
        <Chips
          id="hashtags"
          v-model="formValue.hashtags"
          separator=","
          aria-describedby="hashtags-help"
          :max="5"
          :allowDuplicate="false"
          :addOnBlur="true"
          :placeholder="
            formValue.hashtags.length != 5
              ? 'Write your hashtags'
              : 'Seems good'
          "
        />
      </div>
      <small id="hashtags-help"
        >Separate hashtags by "," or Enter. Maximum 5 hashtags</small
      >
    </div>
    <Button class="justify-center items-center font-secondary-bold"
      >Create</Button
    >
    <p>{{ formValue }}</p>
  </div>
</template>
<style scoped></style>
