<template>
  <Sidebar></Sidebar>
  <Header></Header
  ><button @click="openNav()" type="button" class="btn btn-outline-dark mb-4">
    <font-awesome-icon class="align-middle fs-1" :icon="['fas', 'bars']" />
  </button>

  <router-view class="min-vh-100"></router-view>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Sidebar,
  },
  methods: {
    openNav() {
      document.getElementById("sidebar").classList.toggle("w-25");
      document.getElementById("sidebar").classList.toggle("p-3");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
