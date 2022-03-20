<template>
  <div class="sidebar" v-if="show">
    <div
      class="d-flex flex-column flex-shrink-0 bg-light"
      style="width: 4.5rem; z-index: 300"
    >
      <a
        href="/"
        class="d-block p-3 link-dark text-decoration-none"
        title="Icon-only"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
      >
        <font-awesome-icon
          class="me-1"
          :icon="['fas', 'location-arrow']"
        ></font-awesome-icon>
        <span class="visually-hidden">Icon-only</span>
      </a>
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link active py-3 border-bottom">
            <font-awesome-icon
              class="me-1"
              :icon="['fas', 'home']"
            ></font-awesome-icon>
          </router-link>
        </li>
        <li>
          <router-link to="/blogs" class="nav-link py-3 border-bottom">
            <font-awesome-icon
              class="me-1"
              :icon="['fas', 'blog']"
            ></font-awesome-icon>
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="nav-link py-3 border-bottom">
            <font-awesome-icon
              class="me-1"
              :icon="['fas', 'info-circle']"
            ></font-awesome-icon>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link py-3 border-bottom">
            <font-awesome-icon
              class="me-1"
              :icon="['fas', 'location-arrow']"
            ></font-awesome-icon>
          </router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link py-3 border-bottom">
            <font-awesome-icon
              class="me-1"
              :icon="['fas', 'location-arrow']"
            ></font-awesome-icon>
          </router-link>
        </li>
      </ul>
      <div class="dropdown border-top">
        <a
          href="#"
          class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <font-awesome-icon
            class="me-1"
            :icon="['fas', 'location-arrow']"
          ></font-awesome-icon>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser3"
        >
          <li><a class="dropdown-item" href="#">New project...</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  created() {
    window.addEventListener("mousemove", this.windowMove);
  },
  methods: {
    windowMove(ev) {
      if (ev.screenX > 100) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
});
</script>

<style scoped>
.sidebar {
  z-index: 1000;
}
</style>
