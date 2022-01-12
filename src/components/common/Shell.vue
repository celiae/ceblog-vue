<template>
  <div
    class="w-75 position-relative m-auto text-start ps-3 bg-dark text-light"
    @mouseover="show = true"
    @mouseleave="hideClip()"
    @click="copy()"
    data-aos="zoom-in"
  >
    <div
      class="m-auto mt-5 overflow-auto text-nowrap pt-4 pb-2 fs-3 border-top border-warning"
    >
      <font-awesome-icon
        class="align-middle fs-1 text-light me-2"
        :icon="['fas', 'terminal']"
      />
      <code type="text" class="text-light m-3">{{ msg }}</code>
    </div>

    <div
      @click="copyText()"
      v-if="show"
      class="position-absolute text-light top-0 end-0 m-2 btn btn-light fs-6"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Click to copy"
    >
      <span class="badge bg-secondary bg-info">{{ lang }}</span>
      <font-awesome-icon
        v-if="clipboardShow"
        class="align-middle fs-1 text-dark"
        :icon="['fas', 'paste']"
      />

      <font-awesome-icon
        v-if="checkedShow"
        class="align-middle fs-1 text-success text-opacity-50"
        :icon="['fas', 'check-double']"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
      clipboardShow: true,
      checkedShow: false,
    };
  },
  props: {
    msg: String,
    lang: String,
  },
  methods: {
    hideClip() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
    copyText() {
      navigator.clipboard.writeText(this.msg);
      this.clipboardShow = false;
      this.checkedShow = true;
      setTimeout(() => {
        this.clipboardShow = true;
        this.checkedShow = false;
      }, 3000);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "/node_modules/bootstrap/scss/bootstrap.scss";
.status {
  border-left: 5px solid $teal-500;
  height: 1.4rem;
  position: sticky;
  left: 0;
}
@media screen and (min-width: 1000px) {
  .inner-shell {
    width: 50% !important;
    overflow: auto;
  }
  code {
    font-size: 2rem !important;
    overflow: auto;
  }
}
</style>
