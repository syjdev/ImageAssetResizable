<script setup lang="ts">
import { ref } from "vue";
import FileUploadPanel from "./components/FileUploadPanel.vue";
</script>

<template>
  <div class="container" style="background-color: white">
    <!-- 최상한 헤더 부분 -->
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 48px;
      "
    >
      <a href="./" target="_blank" style="height: 18px; margin-left: 16px">
        <img
          src="./assets/convertly_bi_2x.png"
          style="width: 101.12px; height: 18px"
        />
      </a>

      <a
        href="./"
        style="
          display: flex;
          align-items: center;
          width: 115px;
          margin-left: 32px;
        "
      >
        <img
          src="./assets/home_icon_2x.png"
          style="width: 24px; height: 24px"
        />
        <p
          style="
            font-family: 'SF Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: black;
            margin-left: 8px;
          "
        >
          Home
        </p>
      </a>

      <a
        href="./"
        style="
          display: flex;
          align-items: center;
          width: 143px;
          margin-left: 12px;
        "
      >
        <img
          src="./assets/compress_icon_2x.png"
          style="width: 24px; height: 24px"
        />
        <p
          style="
            font-family: 'SF Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: black;
            margin-left: 8px;
          "
        >
          Compress
        </p>
      </a>
    </div>

    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 64px;
      "
    >
      <div>
        <p
          style="
            font-family: 'SF Pro';
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            color: black;
            margin-top: 0px;
            margin-bottom: 0px;
          "
        >
          Compress Image
        </p>

        <p
          style="
            font-family: 'SF Pro';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            color: #616161;
            margin-top: 4px;
            margin-bottom: 0px;
          "
        >
          Reduce video file size online
        </p>
      </div>

      <FileUploadPanel />

      <div style="margin-top: 124px">
        <div style="display: flex; flex-direction: row">
          <div style="width: 200px">
            <img
              src="./assets/clock_badge_2x.png"
              style="width: 32px; height: 32px"
            />

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 590;
                font-size: 16px;
                line-height: 150%;
                color: black;
                margin-top: 12px;
                margin-bottom: 0px;
              "
            >
              Fast Compression
            </p>

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: black;
                opacity: 0.6;
                margin-top: 16px;
                margin-bottom: 0px;
              "
            >
              The tool will do everything for you, just upload your file and
              it'll set the best parameters to reduce its size and to keep
              quality as much as possible.
            </p>
          </div>

          <div style="width: 200px; margin-left: 162px">
            <img
              src="./assets/check_badge_2x.png"
              style="width: 32px; height: 32px"
            />

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 590;
                font-size: 16px;
                line-height: 150%;
                color: black;
                margin-top: 12px;
                margin-bottom: 0px;
              "
            >
              Secure Encryption
            </p>

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: black;
                opacity: 0.6;
                margin-top: 16px;
                margin-bottom: 0px;
              "
            >
              You're the only one who has access to your files because all the
              communications are performed via secure channels.
            </p>
          </div>

          <div style="width: 200px; margin-left: 162px">
            <img
              src="./assets/clock_badge_2x.png"
              style="width: 32px; height: 32px"
            />

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 590;
                font-size: 16px;
                line-height: 150%;
                color: black;
                margin-top: 12px;
                margin-bottom: 0px;
              "
            >
              Check Preview
            </p>

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: black;
                opacity: 0.6;
                margin-top: 16px;
                margin-bottom: 0px;
              "
            >
              You can first see the preview of your file and only then save it
              back to your device.
            </p>
          </div>
        </div>

        <div style="display: flex; flex-direction: row; margin-top: 62px">
          <div style="width: 200px">
            <img
              src="./assets/globe_badge_2x.png"
              style="width: 32px; height: 32px"
            />

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 590;
                font-size: 16px;
                line-height: 150%;
                color: black;
                margin-top: 12px;
                margin-bottom: 0px;
              "
            >
              Online Tool
            </p>

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: black;
                opacity: 0.6;
                margin-top: 16px;
                margin-bottom: 0px;
              "
            >
              The video compressor is completely online which means that you
              don't have to download and install anything to your device.
            </p>
          </div>

          <div style="width: 200px; margin-left: 162px">
            <img
              src="./assets/heart_badge_2x.png"
              style="width: 32px; height: 32px"
            />

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 590;
                font-size: 16px;
                line-height: 150%;
                color: black;
                margin-top: 12px;
                margin-bottom: 0px;
              "
            >
              Simple Interface
            </p>

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: black;
                opacity: 0.6;
                margin-top: 16px;
                margin-bottom: 0px;
              "
            >
              Don't worry, the tool is really intuitive, you don't even need to
              read a manual to use it!
            </p>
          </div>

          <div style="width: 200px; margin-left: 162px">
            <img
              src="./assets/document_badge_2x.png"
              style="width: 32px; height: 32px"
            />

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 590;
                font-size: 16px;
                line-height: 150%;
                color: black;
                margin-top: 12px;
                margin-bottom: 0px;
              "
            >
              Supports Any Format
            </p>

            <p
              style="
                font-family: 'SF Pro';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: black;
                opacity: 0.6;
                margin-top: 16px;
                margin-bottom: 0px;
              "
            >
              Clideo works with any popular format like MP4, WMV, MOV, VOB, AVI,
              and with more rare ones as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  flex-direction: row;
}
</style>
