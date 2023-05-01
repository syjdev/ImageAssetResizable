<script setup lang="ts">
import { ref, PropType } from "vue";

const props = defineProps({
  onAddedImage: {
    type: Object as PropType<(imageFile: ImageFile) => void>,
    required: true,
  },
});

const imageFile = ref<ImageFile>();
const isDragging = ref(false);

function onDragenter(event: DragEvent) {}

function onDragleave(event: DragEvent) {
  isDragging.value = false;
}

function onDragover(event: DragEvent) {
  event.preventDefault();
  isDragging.value = true;
}

async function onDrop(event: DragEvent) {
  event.preventDefault();

  const files = event.dataTransfer?.files;
  if (files) {
    var file: ImageFile = files[0];
    const fileData = (await readFile(file)) as string;
    file.src = fileData;

    imageFile.value = file;
    props.onAddedImage(file);
  }
  isDragging.value = false;
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
    props.onAddedImage(file);
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
  <div style="text-align: center; display: inline-block">
    <div
      class="row"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @dragover="onDragover"
      @drop="onDrop"
      style="height: 300px; width: 300px; background-color: cyan"
    >
      <img
        v-if="imageFile"
        class="row"
        :src="imageFile?.src"
        style="width: 100%; height: 100%"
      />
    </div>

    <input
      class="hidden-input"
      type="file"
      id="fileInput"
      @change="onInputtedFileChanged"
    />

    <label for="fileInput" class="file-label">
      <div v-if="isDragging">Release to drop files here.</div>
      <div v-else>Drop files here or <u>click here</u> to upload.</div>
    </label>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}
</style>
