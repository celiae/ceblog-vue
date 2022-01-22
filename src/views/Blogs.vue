<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="blog in blogs" :key="blog.id">
        <Card
          :title="blog.title"
          :content="blog.content"
          :linkText="blog.linkText"
          :path="blog.path"
          :btnIcon="blog.btnIcon"
        ></Card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/common/Card.vue";
export default defineComponent({
  components: { Card },
  data() {
    return {
      blogs: [
        {
          title: "Archlinux installation",
          content: "iso-zsh 详细指令",
          // linkText: "安装Archlinux",
          path: "/blogs/archlinux",
          btnIcon: ["fab", "linux"],
        },
        {
          title: "Github & Git",
          content: "git -> github",
          // linkText: "如何使用git&github",
          path: "/blogs/git",
          btnIcon: ["fab", "github"],
        },
        {
          title: "PixelExperience",
          content: "Redmi K20 pro(raphael) 上刷机",
          // linkText: "给手机换OS",
          path: "/blogs/pixel",
          btnIcon: ["fab", "android"],
        },
        {
          title: "Bluetooth on Archlinux",
          content: "Archlinux 上使用蓝牙",
          path: "/blogs/bluetooth",
          btnIcon: ["fab", "bluetooth"],
        },
      ],
    };
  },
});
</script>
