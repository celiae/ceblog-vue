<template>
  <div class="home">
    <div class="text-start ps-5 ms-5"><font-awesome-icon
        class="align-middle fs-1 me-2"
        :icon="['fas', 'arrow-left']"
      />导航:我在这里</div>
    <Heros></Heros>
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
