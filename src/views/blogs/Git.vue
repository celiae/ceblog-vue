<template>
  <div class="container pt-5">
    <h1 class="user-select-none">跳转官方教程</h1>
    <p class="fs-5 user-select-none">
      Git 的官方教程能够提供更系统更完整的知识，点击按钮跳转到
      <span class="text-decoration-underline">Git-Pro</span>
    </p>
    <div>
      <font-awesome-icon
        class="fs-1 align-middle me-4"
        :icon="['fas', 'arrow-right']"
      ></font-awesome-icon>
      <Button
        :buttonStyle="buttonStyle"
        :msg="buttonMsg"
        :icon="buttonIcon"
        @click="toGitpro"
      ></Button>
    </div>
    <hr />
    <div v-for="command in commands" :key="command.id">
      <Shell
        class="rounded-end"
        :msg="command.msg"
        :lang="command.lang"
      ></Shell>
      <div
        class="border-bottom border-warning border-4 w-75 m-auto text-start fs-5 mt-2"
      >
        {{ command.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/common/Button.vue";
import Shell from "@/components/common/Shell.vue";
export default defineComponent({
  data() {
    return {
      buttonStyle: "bubble2",
      buttonMsg: "git - pro",
      buttonIcon: ["fab", "git-alt"],
      commands: [
        {
          description: "新建一个文件夹,取一个代表项目的名字,最好是易记,有个性",
          msg: "mkdir <name> && cd <name>",
          lang: "bash",
        },
        {
          description: "在当前目录下创建 .git 目录,对当前目录进行版本控制",
          msg: "git init",
          lang: "bash",
        },
        {
          description:
            "stage, 所有(部分)文件送到暂存区,在.gitignore里的文件不受任何影响，下同",
          msg: "git add -A",
          lang: "bash",
        },
        {
          description:
            "commit, 所有(部分)文件提交到本地库,生成commit ID,也就是更新了版本",
          msg: "git commit -m '<some description>'",
          lang: "bash",
        },
        {
          description:
            "查看已提交的日志,包含 commit 的时候写下的 <some description>",
          msg: "git log",
          lang: "bash",
        },
        {
          description: "无论何时都可以查看当前目录的版本状态,包括一些帮助提示",
          msg: "git status",
          lang: "bash",
        },
      ],
    };
  },
  components: { Button, Shell },
  methods: {
    toGitpro: function () {
      location.href = "https://git-scm.com/book/en/v2";
    },
  },
});
</script>
