<template>
  <div
    class="position-sticky top-0 fs-3 bg-light bg-opacity-75 text-dark"
    style="z-index: 500"
  >
    <header
      id="header"
      class="d-flex flex-wrap justify-content-center p-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        ><span
          ><font-awesome-icon
            class="align-middle fs-1 me-2"
            :icon="['fas', 'blog']"
        /></span>
        <span id="webTitle" style="transition: all 0.5s ease">Celiae Blog</span>
      </a>
      <ul class="nav nav-pills ms-5">
        <li class="nav-item">
          <a
            href="https://celiae.github.io"
            class="nav-link active"
            aria-current="page"
            >Celiae<font-awesome-icon
              class="align-middle fs-1 ms-2"
              :icon="['fas', 'angry']"
          /></a>
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/celiae"
            class="nav-link border-bottom border-info"
            >github<font-awesome-icon
              class="align-middle fs-1 ms-2"
              :icon="['fab', 'github-alt']"
          /></a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  created: function () {
    window.addEventListener("scroll", this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("header").style.paddingInline = ".8rem";
        document.getElementById("header").style.fontSize = "1.3rem";
        document.getElementById("webTitle").style.fontSize = "1.3rem";
      } else {
        document.getElementById("header").style.paddingInline = "2.5rem";
        document.getElementById("header").style.fontSize = "2rem";
        document.getElementById("webTitle").style.fontSize = "2.5rem";
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.container {
  z-index: 500;
}
header {
  transition: all 0.5s ease;
  padding-inline: 2.5rem;
  font-size: 2.5rem;
}
</style>
