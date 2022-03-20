<template>
  <div class="container border-secondary border-bottom border-5 pb-5">
    <h1>Archlinux 一切都是最新</h1>
    <p class="w-75 m-auto fs-5 text-start">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      用了两年,从没发生什么问题。机器上所有软件一行命令即可更新至最新版本，有多新？
      可以说每小时都有新的代码出现，每小时都有新的软件包，这是平日里用到的那些软件不能想象的事情。
      系统及软件包占用的存储空间很小，大部分可以用来存储自己的文件。边用边学，开源软件等。
    </p>
    <div v-for="command in commands" :key="command.id">
      <Shell
        class="rounded-end"
        :msg="command.msg"
        :lang="command.lang"
      ></Shell>
      <div
        class="border-bottom border-primary border-4 w-75 m-auto text-start fs-5 mt-2"
      >
        {{ command.description }}
      </div>
      <div class="w-75 m-auto text-start fs-5 mt-2">
        <a :href="command.resource">{{ command.resourceDes }}</a>
      </div>
    </div>
  </div>
  <div class="container pt-5" data-aos="zoom-in-up">
    <div class="display-4 fw-bold text-primary">可能会遇到的问题</div>
    <Accordion :contents="problems"></Accordion>
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
        { msg: "iwctl", lang: "zsh", description: "进入联网工具iwctl" },
        { msg: "device list", lang: "zsh", description: "查看网卡" },
        { msg: "station wlan0 scan", lang: "zsh", description: "扫描wifi" },
        {
          msg: "station device get-networks",
          lang: "zsh",
          description: "扫描结果",
        },
        {
          msg: "station device connect SSID",
          lang: "zsh",
          description: "连接相应wifi SSID为wifi名",
        },
        {
          msg: "vim /etc/pacman.d/mirrorlist",
          lang: "zsh",
          description:
            "镜像源是下载软件包的服务器,在这里,我们把China那一块URL移到最上面,pacman则会优先从China源下载,速度更快",
        },
        {
          msg: "ls /sys/firmware/efi/efivars",
          lang: "zsh",
          description: "是UEFI启动马,有文件则是,空则是普通BIOS",
        },
        { msg: "lsblk", lang: "zsh", description: "磁盘情况" },
        {
          msg: "cfdisk /dev/nvme0n1",
          lang: "zsh",
          description: "cfdisk工具操作磁盘,分区",
          resource:
            "https://wiki.archlinux.org/title/Partitioning#Example_layouts",
          resourceDes: "Archlinux wiki - partition layout",
        },
        {
          msg: "mkfs.ext4 /dev/nvme0n1p2",
          lang: "zsh",
          description: "格式化主分区, btrfs/ext4/... 格式",
        },
        {
          msg: "mkfs.vfat /dev/nvme0n1p1",
          lang: "zsh",
          description: "格式化grub启动分区",
        },
        {
          msg: "mount /dev/nvme0n1p2 /mnt",
          lang: "zsh",
          description: "挂载主分区",
        },
        {
          msg: "pacstrap /mnt base base-devel linux linux-firmware grub vim dhcpcd iwd efibootmgr bash-completion zsh archlinux-keyring openssh os-prober #(os-prober是双系统需要下载的包)",
          lang: "zsh",
          description:
            "pacstrap安装软件包,base是基础软件包,base-devel是基础软件包的编译依赖,linux是系统软件包,linux-firmware是系统软件包的驱动,grub是启动软件包,vim是编辑器,dhcpcd是网络驱动,iwd是网络驱动,efibootmgr是UEFI启动马,bash-completion是编辑器插件,zsh是编辑器,archlinux-keyring是软件包签名,openssh是网络驱动,os-prober是双系统需要下载的包",
        },
        {
          msg: "genfstab -U /mnt >> /mnt/etc/fstab",
          lang: "zsh",
          description: "启动时自动挂载主分区",
        },
        { msg: "arch-chroot /mnt", lang: "zsh", description: "切换根分区" },
        { msg: "systemctl enable dhcpcd", lang: "zsh", description: "上网" },
        { msg: "mkinitcpio -P", lang: "zsh", description: "内核" },
        { msg: "passwd", lang: "zsh", description: "设置root密码" },
        {
          msg: "mkdir /boot/efi",
          lang: "zsh",
          description: "准备grub分区挂载点",
        },
        {
          msg: "mount /dev/nvme0n1p1 /boot/efi",
          lang: "zsh",
          description: "挂载启动分区",
        },
        {
          msg: "grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader=GRUB",
          lang: "zsh",
          description: "安装grub",
        },
        {
          msg: "echo 'GRUB_DISABLE_OS_PROBER=false' >> /etc/default/grub",
          lang: "zsh",
          description: "允许grub检测系统",
        },
        {
          msg: "grub-mkconfig -o /boot/grub/grub.cfg",
          lang: "zsh",
          description: "生成grub配置文件",
        },
        {
          msg: "useradd -m celiae",
          lang: "zsh",
          description: "创建用户",
        },
        {
          msg: "gpasswd -a user group #wheel",
          lang: "zsh",
          description: "sudo授权",
        },
        {
          msg: "sudo pacman -S archlinux-keyring",
          lang: "zsh",
          description: "安装软件包签名",
        },
        {
          msg: "pacman -S adobe-source-han-sans-cn-fonts fcitx",
          lang: "zsh",
          description: "安装中文字体",
        },
        {
          msg: "exit",
          lang: "zsh",
          description: "退出硬盘系统至iso安装系统,或者按Ctrl+d",
        },
        { msg: "reboot", lang: "zsh", description: "重启" },
      ],
      pacman: [
        {
          title: "文件安装在哪",
          text: "pacman -Ql package",
        },
      ],
      problems: [
        {
          data_bs_target: "#flush-collapseOne",
          aria_controls: "flush-collapseOne",
          text_id: "flush-collapseOne",
          aria_labelledby: "flush-headingOne",
          title: "当在联网时遇到Operation not possible due to RF-kill，你可以",
          text: "",
          commands: ["sudo rfkill list", "sudo rfkill unblock wifi"],
          lang: "bash",
        },
        {
          data_bs_target: "#flush-collapseTwo",
          aria_controls: "flush-collapseTwo",
          text_id: "flush-collapseTwo",
          aria_labelledby: "flush-headingTwo",
          title: "下载安装package出错，可能需要下载archlinux-keyring",
          commands: ["sudo pacman -S archlinux-keyring"],
          lang: "bash",
        },
        {
          data_bs_target: "#flush-collapseThree",
          aria_controls: "flush-collapseThree",
          text_id: "flush-collapseThree",
          aria_labelledby: "flush-headingThree",
          title: "文件安装在哪",
          commands: ["pacman -Ql package"],
          lang: "bash",
        },
        {
          data_bs_target: "#flush-collapseFour",
          aria_controls: "flush-collapseFour",
          text_id: "flush-collapseFour",
          aria_labelledby: "flush-headingFour",
          title: "不知道某个命令属于哪个包",
          commands: ["sudo pacman -F <command>"],
          lang: "bash",
        },
      ],
    };
  },
});
</script>
