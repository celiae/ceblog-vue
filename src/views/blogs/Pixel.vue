<template>
  <div class="container">
    <Button
      @click="toTwrp()"
      class="me-3"
      msg="twrp"
      buttonStyle="bubble3"
    ></Button>
    <Button
      @click="toPixel()"
      class="ms-3"
      msg="pixel"
      buttonStyle="bubble4"
    ></Button>
  </div>
  <div class="container border-success border-bottom pb-5">
    <div v-for="command in commands" :key="command.id">
      <Shell
        class="rounded-end"
        :msg="command.msg"
        :lang="command.lang"
      ></Shell>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Shell from "@/components/common/Shell.vue";
import Button from "@/components/common/Button.vue";
export default defineComponent({
  components: { Shell, Button },
  methods: {
    toTwrp() {
      location.href = "https://twrp.me/";
    },
    toPixel() {
      location.href = "https://download.pixelexperience.org/";
    },
  },
  data() {
    return {
      commands: [
        { msg: "adb reboot bootloader", lang: "bash" },
        { msg: "fastboot devices", lang: "bash" },
        {
          msg: "fastboot flash recovery twrp-3.6.0_9-0-raphael.img",
          lang: "bash",
        },
        { msg: "fastboot boot twrp-3.6.0_9-0-raphael.img", lang: "bash" },
        { msg: "Recovery -> Format Data", lang: "twrp" },
        { msg: "Advanced -> 选择 Cache,System", lang: "twrp" },
        { msg: "主页 -> Advanced -> ADB Slideload", lang: "twrp" },
        {
          msg: "adb sideload PixelExperience_raphael-12.0-20211125-0124-BETA.zip",
          lang: "bash",
        },
        { msg: "adb reboot", lang: "bash" },
      ],
    };
  },
});
</script>
