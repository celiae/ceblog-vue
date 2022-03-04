<template>
  <div
    class="card m-auto mt-4 mb-4 text-dark blog"
    style="width: 18rem"
    v-on="{ mouseover: doOver, mouseout: doOut }"
    :class="{}"
  >
    <img src="@/assets/logo.svg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title text-primary user-select-none">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <router-link :to="path" class="btn btn-primary w-25"
        >{{ linkText
        }}<font-awesome-icon class="align-middle fs-3" :icon="btnIcon"
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isOver: true,
    };
  },
  props: {
    title: String,
    content: String,
    linkText: String,
    path: String,
    btnIcon: Array,
  },
  methods: {
    doOver: function () {
      console.log("over");
      this.isOver = true;
    },
    doOut: function () {
      console.log("out");
      this.isOver = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.blog:hover {
  transform: scale(1.2, 1.2) !important;
  transition: all 0.5s ease;
}
</style>
