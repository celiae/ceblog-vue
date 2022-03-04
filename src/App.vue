<template>
  <Header></Header>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <Sidebar class="position-fixed"></Sidebar>
      </div>
      <div class="col-10">
        <router-view class="min-vh-100"></router-view>
      </div>
    </div>
  </div>
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
