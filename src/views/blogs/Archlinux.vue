<template>
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
    <div class="display-4">可能会遇到的问题</div>
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
        { msg: "iwctl", lang: "zsh" },
        { msg: "device list", lang: "zsh" },
        { msg: "station wlan0 scan", lang: "zsh" },
        { msg: "station device get-networks", lang: "zsh" },
        { msg: "station device connect SSID", lang: "zsh" },
        { msg: "vim /etc/pacman.d/mirrorlist", lang: "zsh" },
        { msg: "ls /sys/firmware/efi/efivars", lang: "zsh" },
        { msg: "lsblk", lang: "zsh" },
        { msg: "cfdisk /dev/nvme0n1", lang: "zsh" },
        { msg: "mkfs.ext4 /dev/nvme0n1p2", lang: "zsh" },
        { msg: "mkfs.vfat /dev/nvme0n1p1 # option", lang: "zsh" },
        { msg: "mount /dev/nvme0n1p2 /mnt", lang: "zsh" },
        {
          msg: "pacstrap /mnt base base-devel linux linux-firmware grub vim dhcpcd iwd efibootmgr bash-completion zsh archlinux-keyring openssh os-prober #(os-prober是双系统需要下载的包)",
          lang: "zsh",
        },
        { msg: "genfstab -U /mnt >> /mnt/etc/fstab", lang: "zsh" },
        { msg: "arch-chroot /mnt", lang: "zsh" },
        { msg: "systemctl enable dhcpcd", lang: "zsh" },
        { msg: "mkinitcpio -P", lang: "zsh" },
        { msg: "passwd", lang: "zsh" },
        { msg: "mkdir /boot/efi", lang: "zsh" },
        { msg: "mount /dev/nvme0n1p1 /boot/efi", lang: "zsh" },
        {
          msg: "grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader=GRUB",
          lang: "zsh",
        },
        {
          msg: "echo 'GRUB_DISABLE_OS_PROBER=false' >> /etc/default/grub",
          lang: "zsh",
        },
        { msg: "grub-mkconfig -o /boot/grub/grub.cfg", lang: "zsh" },
        { msg: "gpasswd -a user group #wheel", lang: "zsh" },
        { msg: "sudo pacman -S archlinux-keyring", lang: "zsh" },
        { msg: "pacman -S adobe-source-han-sans-cn-fonts fcitx", lang: "zsh" },
        { msg: "exit", lang: "zsh" },
        { msg: "reboot", lang: "zsh" },
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
