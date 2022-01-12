<template>
  <code :class="codeClass" v-for="code in codemsg" :key="code.id">
    <span>{{ code.indexOf(";") != -1 ? "&nbsp;&nbsp;" : "" }}</span> {{ code }}
  </code>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      codeClass: ["fs-4", "text-primary"],
    };
  },
  props: {
    codemsg: Array,
  },
});
</script>

<style lang="scss" scoped>
code {
  text-align: left;
  color: #000;
  font-weight: 400;
}
.stmt {
  padding-left: 1rem;
}
@media screen and (min-width: 765px) {
  code {
    font-size: 2rem !important;
  }
}
</style>
