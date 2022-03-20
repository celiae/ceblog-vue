<template>
  <footer
    class="d-flex flex-wrap justify-content-between align-items-center p-3 border-top border-primary bg-dark text-light"
  >
    <div class="col-md-4 d-flex align-items-center">
      <a
        href="/"
        class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
      >
      </a>
      <span class="text-muted">
        ALL RIGHTS RESERVE &copy; {{ getYear }} Celiae</span
      >
    </div>

    <ul
      class="nav col-md-4 justify-content-end list-unstyled d-flex text-light"
    >
      <li
        class="ms-3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="小鸟"
      >
        <a class="text-info" href="https://twitter.com/ceeliatt">
          <font-awesome-icon
            class="align-middle fs-1"
            :icon="['fab', 'twitter']"
        /></a>
      </li>
      <li
        class="ms-3"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="小飞机"
      >
        <a class="text-primary" href="https://t.me/celiaetg"
          ><font-awesome-icon
            class="align-middle fs-1"
            :icon="['fab', 'telegram-plane']"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    getYear() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style lang="scss" scoped>
li:hover {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
</style>
