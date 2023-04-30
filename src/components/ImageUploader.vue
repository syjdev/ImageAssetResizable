<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>()

const count = ref(0);
const imageFile = ref<ImageFile>();

function onDragenter(event: DragEvent) {
  console.log(event);
}

function onDragleave(event: DragEvent) {
  console.log(event);
}

function onDragover(event: DragEvent) {
  event.preventDefault();
}

async function onDrop(event: DragEvent) {
  event.preventDefault();
  // this.isDragged = false;
  const files = event.dataTransfer?.files;
  if (files) {
    var file: ImageFile = files[0];
    const fileData = (await readFile(file)) as string;
    file.src = fileData;

    imageFile.value = file;
    console.log(file);
  }
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

interface ImageFile extends File {
  src?: string;
}

async function onInputtedFileChanged(event: Event) {
  const inputEvent = event as HTMLInputEvent;
  const files = inputEvent.target?.files;
  if (files) {
    var file: ImageFile = files[0];
    const fileData = (await readFile(file)) as string;
    file.src = fileData;

    imageFile.value = file;
    console.log(file);
  }
}

async function readFile(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      resolve(e.target?.result);
    };
    reader.readAsDataURL(file);
  });
}
</script>

<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count + count }}</button>
    <p>이미지를 이곳으로 드래그 해주세요.</p>
  </div>

  <div
    class="file-upload-container"
    @dragenter="onDragenter"
    @dragleave="onDragleave"
    @dragover="onDragover"
    @drop="onDrop"
    style="height: 300px; width: 300px; background-color: cyan"
  >
    <input
      type="file"
      ref="fileInput"
      class="file-upload-input"
      @change="onInputtedFileChanged"
      multiple
    />
  </div>

  <img :src="imageFile?.src" style="width: 100px; height: 100px" />
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
