<template>
  <div class="home">
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
