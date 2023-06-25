// <script setup lang="ts">
// import { ref } from "vue";

// import ImageUploader from "./components/ImageUploader.vue";
// import axios from "axios";

// import imageCompression from "browser-image-compression";

// const compressedImageUrl = ref("");

// async function onAddedImage(imageFile: any) {
//   console.log(imageFile);

//   const options = {
//     initialQuality: 0.5,
//   };

//   const result = await imageCompression(imageFile, options);

//   axios
//     .get(URL.createObjectURL(result), {
//       responseType: "blob",
//     })
//     .then((response) => {
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       compressedImageUrl.value = url;
//       link.href = url;
//       link.setAttribute("download", "compressed_" + imageFile.name); //or any other extension
//       document.body.appendChild(link);
//       // link.click();
//     })
//     .catch((exception) => {
//       alert("파일 다운로드 실패");
//     });
// }
// </script>

// import imageCompression from "browser-image-compression";

// interface ImageFile extends File {
//   src?: string;
// }

// class ImageCompressor {
//   static async compress(file: ImageFile) {
//     const options = {
//       initialQuality: 0.5,
//     };

//     return imageCompression(file, options);
//   }
// }
