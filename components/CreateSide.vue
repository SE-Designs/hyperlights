<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseClient();

const formValue = ref({
  fileName: "",
  title: "",
  maintag: "",
  author: user.value?.user_metadata.login,
  hashtags: [],
  video: "",
});

const loading = ref({
  upload: false,
  submit: false,
});

let { data: maintags, error: loadMaintags } = (await client
  .from("maintag")
  .select("*")) as any;

const filteredMaintags = ref();

function search(event: any) {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredMaintags.value = maintags.map((item: any) => item.maintag);
    } else {
      const filteredVals = maintags.filter((item: any) => {
        return item.maintag.toLowerCase().startsWith(event.query.toLowerCase());
      });

      filteredMaintags.value = filteredVals.map((val: any) => val.maintag);
    }
  }, 250);
}

async function selectFile(event: any) {
  formValue.value.video = event.files[0];
  formValue.value.fileName = event.files[0].name;

  uploadVideo();
}

async function uploadVideo() {
  loading.value.upload = true;

  console.log(formValue.value);

  const { data, error } = await client.storage
    .from("hyperlights")
    .upload(
      `${user.value?.id}/${formValue.value.fileName}`,
      formValue.value.video,
      {
        cacheControl: "3600",
        upsert: false,
      }
    )
    .finally(() => (loading.value.upload = false));
  console.log(data);
  console.log(error);
}

async function submitVideo() {
  // const submitData = {
  //   title: formValue.value.title,
  //   maintag: formValue.value.maintag,
  //   link:
  //     "https://hvpaozdpdualvuuqqhjn.supabase.co/storage/v1/object/public/" +
  //     "hyperlights" +
  //     user?.value?.id +
  //     formValue.value.fileName,
  //   author: user.value?.id,
  //   hashtags: formValue.value.hashtags,
  // } as any;

  const { data: submittedData, error: submitError } = (await client
    .from("hyperlight")
    .insert({
      title: formValue.value.title,
      maintag: formValue.value.maintag,
      link:
        "https://hvpaozdpdualvuuqqhjn.supabase.co/storage/v1/object/public/" +
        "hyperlights/" +
        user?.value?.id +
        "/" +
        formValue.value.fileName,
      author: user.value?.id,
      hashtags: formValue.value.hashtags,
    } as any)
    .select()) as any;

  console.log(submittedData);
  console.log(submitError);
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
        :custom-upload="true"
        accept="video/mp4,video/x-m4v,video/*"
        @select="selectFile"
        :auto="true"
        :show-upload-button="false"
        :show-cancel-button="false"
        chooseLabel="Browse"
        aria-describedby="hyperlight"
        class="w-full"
        v-if="!loading.upload"
      >
        <template #uploadicon>
          <IconUpload />
        </template>
      </FileUpload>
      <Button severity="primary" :loading="true" v-else></Button>
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
    <Button
      class="justify-center items-center font-secondary-bold"
      @click="submitVideo"
      >Create</Button
    >
    <p>{{ formValue }}</p>
  </div>
</template>
<style scoped></style>
