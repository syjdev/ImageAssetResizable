<script setup lang="ts">
import { ref, PropType } from "vue";
import ImageCompressor from "src/services/ImageCompressor";
import FileLinkMaker from "src/services/FileLinkMaker";

// const props = defineProps({
//   onAddedImage: {
//     type: Object as PropType<(imageFile: ImageFile) => void>,
//     required: true,
//   },
// });

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
    // props.onAddedImage(file);
    onAddedImagefile(file);
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
    // props.onAddedImage(file);
    onAddedImagefile(file);
  }
}

async function onAddedImagefile(imageFile: ImageFile) {
  const compressedImageFile = await ImageCompressor.compressWithQuality(
    imageFile,
    0.5
  );

  const madeLink = await FileLinkMaker.makeLink(compressedImageFile);

  if (madeLink instanceof HTMLAnchorElement) {
    madeLink.click();
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
  <div
    @dragenter="onDragenter"
    @dragleave="onDragleave"
    @dragover="onDragover"
    @drop="onDrop"
    style="
      display: flex;
      flex-direction: row;
      align-items: center;

      width: 924px;
      height: 240px;

      background: #0071fe;
      box-shadow: 0px 4px 20px rgba(20, 104, 182, 0.25);
      border-radius: 4px;
      margin-left: 32px;
      margin-right: 32px;
      margin-top: 32px;
    "
  >
    <img
      src="~/assets/drop_files_here_2x.png"
      style="width: 327px; height: 240px; margin-left: -15.5px"
    />

    <div style="margin-left: 108px">
      <p
        style="
          font-family: 'SF Pro';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 150%;
          margin-top: 0px;
          margin-bottom: 0px;
          color: white;
        "
      >
        Drop Files Here
      </p>

      <input
        class="hidden-input"
        type="file"
        id="fileInput"
        @change="onInputtedFileChanged"
      />

      <label for="fileInput" style="display: flex; width: 117px">
        <div
          style="
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 117px;
            height: 28px;
            background: #ffffff;
            border-radius: 200px;
            margin-top: 15px;
          "
        >
          <img
            src="~/assets/choose_files_icon_2x.png"
            style="width: 20px; height: 20px; margin-left: 8px"
          />

          <p
            style="
              font-family: 'SF Pro';
              font-style: normal;
              font-weight: 700;
              font-size: 12px;
              line-height: 150%;
              color: #0071fe;
              margin-left: 4px;
            "
          >
            Choose Files
          </p>
        </div>
      </label>
    </div>
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
