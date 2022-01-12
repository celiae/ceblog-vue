<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <Fullnav></Fullnav>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">
          {{ heroTitle }}
        </h1>
        <p class="lead">
          {{ heroContent }}
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            <font-awesome-icon
              class="align-middle fs-1 me-2"
              :icon="['fab', 'angellist']"
            />行
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Perfect<font-awesome-icon
              class="align-middle fs-1 ms-2"
              :icon="['fas', 'check']"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Fullnav from "@/components/Fullnav.vue";

export default defineComponent({
  data() {
    return {
      heroTitle: "Celiae Blog",
      heroContent: "Writting some command usage.Oh! This site is awesome.",
    };
  },
  components: {
    Fullnav,
  },
});
</script>
