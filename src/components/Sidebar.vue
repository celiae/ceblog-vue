<template>
  <div
    id="sidebar"
    class="d-flex flex-column flex-shrink-0 text-white bg-dark h-100 position-fixed t-0 s-0 z-2000"
    style="z-index: 700; width: 0; transition: all 0.2s ease"
  >
    <div class="row overflow-hidden">
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
      <li class="nav-item mb-2 border-bottom border-info border-4 mb-4">
        <router-link class="text-decoration-none d-block sidebar-a" to="/">
          <font-awesome-icon
            class=""
            :icon="['fas', 'home']"
          ></font-awesome-icon>
          Home
        </router-link>
      </li>
      <li class="nav-item mb-2 border-bottom border-info border-4 mb-4">
        <router-link class="text-decoration-none d-block sidebar-a" to="/blogs">
          <font-awesome-icon
            class="me-1"
            :icon="['fas', 'blog']"
          ></font-awesome-icon>
          Blogs
        </router-link>
      </li>
      <li class="nav-item mb-2 border-bottom border-info border-4 mb-4">
        <router-link
          id="test"
          class="text-decoration-none sidebar-a d-block"
          to="/about"
        >
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
      let sidebar = document.getElementById("sidebar");

      sidebar.classList.remove("w-25");

      sidebar.classList.remove("p-3");

      let sidebar_a = document.querySelectorAll("#sidebar li");

      setTimeout(() => {
        sidebar_a.forEach((element) => {
          element.classList.toggle("border-bottom");
          element.classList.toggle("border-info");
          element.classList.toggle("border-4");
        });
      }, 200);
    },
  },
});
</script>
