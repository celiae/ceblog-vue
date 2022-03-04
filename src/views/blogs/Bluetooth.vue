<template>
  <div class="container border-secondary border-bottom border-5 pb-5">
    <h1>Bluetooth - Archlinux</h1>
    <p class="fs-4 text-dark">
      蓝牙工具有很多,Archlinux
      KDE有自带，在菜单栏下找到蓝牙图标操作即可。蓝牙能够传输容量较小的文件，非常方便
      。
    </p>
    <div v-for="command in commands" :key="command.id">
      <Shell
        class="rounded-end"
        :msg="command.msg"
        :lang="command.lang"
      ></Shell>
    </div>
    <p class="fs-3 pt-4 text-danger">
      <font-awesome-icon
        :icon="['fas', 'exclamation-triangle']"
      ></font-awesome-icon>
      如果已经登陆,请退出重新登陆，因为只有这样才能使组的添加生效
    </p>
    <div class="container pt-5">
      <div class="display-4">Bluetooth</div>
      <Accordion :contents="reason"></Accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Shell from "@/components/common/Shell.vue";
import Accordion from "@/components/common/Accordion.vue";
export default defineComponent({
  components: { Shell, Accordion },
  data() {
    return {
      commands: [
        {
          msg: "sudo pacman -S bluez",
          lang: "bash",
        },
        {
          msg: "sudo systemctl enable --now bluetooth",
          lang: "bash",
        },
        {
          msg: "gpasswd -a <user> lp    #加入lp组才能使用蓝牙",
          lang: "bash",
        },
      ],
      reason: [
        {
          data_bs_target: "#flush-collapseOne",
          aria_controls: "flush-collapseOne",
          text_id: "flush-collapseOne",
          aria_labelledby: "flush-headingOne",
          title: "连接蓝牙鼠标",
          text: "最好在 /etc/bluetooth/main.conf 里设置ControllerMode=dual,不然可能扫描不到设备",
        },
      ],
    };
  },
});
</script>
