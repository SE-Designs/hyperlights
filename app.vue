<script setup lang="ts">
useHead({
  title: "Hyperlights",
  meta: [{ name: "description", content: "My amazing site." }],
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
html {
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  overflow-y: inherit;

  background-color: black;
  min-height: 100vh;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
label,
small,
i,
b,
strong,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;

  font-family: "Space Grotesk";
  font-weight: 400;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: currentColor;
  text-decoration: none;
}

@media only screen and (min-width: 640px) {
  html {
    font-size: 13px;
  }
}

@media only screen and (min-width: 1280px) {
  html {
    font-size: 16px;
  }
}
</style>
