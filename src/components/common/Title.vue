<template>
  <h1
    data-aos="slide-up"
    class="bg-secondary p-2 text-white bg-opacity-25 text-light border-bottom border-primary"
  >
    {{ msg }}<font-awesome-icon class="align-middle fs-1 ms-2" :icon="icon" />
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
    icon: Array,
  },
});
</script>
