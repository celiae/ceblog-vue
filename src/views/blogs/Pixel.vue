<template>
  <div class="container">
    <h1>Pxiel 支持的型号多的是</h1>
    <p class="w-75 m-auto fs-5 text-start">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      在网上看到一些刷机知识与技巧，于是萌发了自个儿动手的念头......主要是利用搜索引擎，
      到处搜，博客,教程，文档等等。深层肯定不理解，照着做还是勉勉强强能行。
    </p>
    <div class="bg-primary border">
      <span class="text-light">适用手机型号：</span>
      <div class="badge btn-dark m-3">Xiaomi 小米</div>
      <div class="badge btn-dark m-3">Oneplus 一加</div>
      <div class="text-warning fw-bold bg-dark p-1">
        其他品牌的手机刷机基本是GG
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Button @click="toTwrp()" msg="twrp" buttonStyle="bubble3"></Button>
      </div>
      <div class="col">
        <Button @click="toPixel()" msg="pixel" buttonStyle="bubble4"></Button>
      </div>
    </div>
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
  <div class="container pt-5">
    <div class="display-4">为什么选择Pxiel Experiences</div>
    <Accordion :contents="reason"></Accordion>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Shell from "@/components/common/Shell.vue";
import Button from "@/components/common/Button.vue";
import Accordion from "@/components/common/Accordion.vue";
export default defineComponent({
  components: { Shell, Button, Accordion },
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
      reason: [
        {
          data_bs_target: "#flush-collapseOne",
          aria_controls: "flush-collapseOne",
          text_id: "flush-collapseOne",
          aria_labelledby: "flush-headingOne",
          title: "支持设备丰富",
          text: "像其他的比如linearOS官方支持的手机型号太有限，很可能没有自己型号的ROM，就很头疼",
        },
        {
          data_bs_target: "#flush-collapseTwo",
          aria_controls: "flush-collapseTwo",
          text_id: "flush-collapseTwo",
          aria_labelledby: "flush-headingTwo",
          title: "漂亮的主题",
          text: "内置许多好看的主题，风格是我喜欢的。图标很有科技感，简洁大方。没有广告！No Ads! No Ads! No Ads!",
        },
        {
          data_bs_target: "#flush-collapseThree",
          aria_controls: "flush-collapseThree",
          text_id: "flush-collapseThree",
          aria_labelledby: "flush-headingThree",
          title: "运行流畅",
          text: "打开应用几乎没有延迟，从没有等待很久的情况",
        },
        {
          data_bs_target: "#flush-collapseFour",
          aria_controls: "flush-collapseFour",
          text_id: "flush-collapseFour",
          aria_labelledby: "flush-headingFour",
          title: "自带Google",
          text: "我们这买到的手机安装Google应用很麻烦，Pixel不需要任何操作直接附带",
        },
      ],
    };
  },
});
</script>
