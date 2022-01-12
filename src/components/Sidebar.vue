<template>
  <div
    id="sidebar"
    class="d-flex flex-column flex-shrink-0 text-white bg-dark h-100 position-fixed t-0 s-0 overflow-hidden z-2000"
    style="z-index: 700; width: 0; transition: all 0.5s ease"
  >
    <div class="row">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none col"
      >
        <span class="fs-4 col"
          ><font-awesome-icon
            class="me-1"
            :icon="['fas', 'location-arrow']"
          ></font-awesome-icon>
          <p>Navigation</p></span
        > </a
      ><button
        @click="closeNav()"
        type="button"
        class="btn-close btn-close-white col fs-1"
        aria-label="Close"
      ></button>
    </div>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto fs-4">
      <li class="nav-item mb-2">
        <router-link class="text-decoration-none" to="/">
          <font-awesome-icon
            class="me-1"
            :icon="['fas', 'home']"
          ></font-awesome-icon>
          Home
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link class="text-decoration-none" to="/blogs">
          <font-awesome-icon
            class="me-1"
            :icon="['fas', 'blog']"
          ></font-awesome-icon>
          Blogs
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link class="text-decoration-none" to="/about">
          <font-awesome-icon
            class="me-1"
            :icon="['fas', 'info-circle']"
          ></font-awesome-icon>
          About
        </router-link>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    closeNav() {
      document.getElementById("sidebar").classList.remove("w-25");
      document.getElementById("sidebar").classList.remove("p-3");
    },
  },
});
</script>
