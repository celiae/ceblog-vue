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
    <h3 class="text-start mt-4">
      当在联网时遇到Operation not possible due to RF-kill，你可以
    </h3>
    <Shell msg="sudo rfkill list" lang="sh"></Shell>
    <Shell msg="sudo rfkill unblock wifi" lang="sh"></Shell>
  </div>
  <div class="container pt-5">
    <h3 class="text-start mt-4">文件安装在哪</h3>
    <Shell msg="pacman -Ql package" lang="sh"></Shell>
  </div>
  <div class="container pt-5">
    <h3 class="text-start mt-4">不知道某个命令属于哪个包</h3>
    <Shell msg="sudo pacman -F <command>" lang="sh"></Shell>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Shell from "@/components/common/Shell.vue";
export default defineComponent({
  components: { Shell },
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
          msg: "pacstrap /mnt base base-devel linux linux-firmware grub neovim dhcpcd iwd efibootmgr bash-completion os-prober #(os-prober是双系统需要下载的包)",
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
    };
  },
});
</script>
