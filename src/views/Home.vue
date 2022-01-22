<template>
  <div class="home">
    <Heros></Heros>
    <div class="container">
      <div class="row">
        <div class="col">hello world</div>
        <div class="col">hello world</div>
        <div class="col">hello world</div>
        <div class="col">hello world</div>
        <div class="col">hello world</div>
        <div class="col">hello world</div>
      </div>
      <div class="row">
        <div class="col"><img src="@/assets/logo.svg" alt="" srcset=""></div>
        <div class="col"><img src="@/assets/logo.svg" alt="" srcset=""></div>
        <div class="col"><img src="@/assets/logo.svg" alt="" srcset=""></div>
        <div class="col"><img src="@/assets/logo.svg" alt="" srcset=""></div>
        <div class="col"><img src="@/assets/logo.svg" alt="" srcset=""></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heros from "@/components/Heros.vue";
export default defineComponent({
  name: "Home",
  components: { Heros },
});
</script>
