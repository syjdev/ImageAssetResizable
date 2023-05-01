<script setup lang="ts">
import ImageUploader from "./components/ImageUploader.vue";
import axios from "axios";

function onAddedImage(imageFile: any) {
  console.log(imageFile);
  var url = URL.createObjectURL(imageFile);
  axios
    .get(url, {
      responseType: "blob",
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "compressed_" + imageFile.name); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
    .catch((exception) => {
      alert("파일 다운로드 실패");
    });
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <image-uploader :on-added-image="onAddedImage" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
