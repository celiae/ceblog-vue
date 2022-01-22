<template>
  <div
    data-aos="zoom-in-up"
    class="card m-auto mt-4 mb-4 text-dark"
    style="width: 18rem"
  >
    <img src="@/assets/logo.svg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title text-primary user-select-none">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <router-link :to="path" class="btn btn-primary w-25"
        >{{ linkText }}<font-awesome-icon class="align-middle fs-3" :icon="btnIcon"
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    content: String,
    linkText: String,
    path: String,
    btnIcon: Array,
  },
});
</script>
