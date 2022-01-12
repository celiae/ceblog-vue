<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide m-auto"
    data-bs-ride="carousel"
    data-aos="zoom-in"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/blog/Linux.svg" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/blog/Nginx.svg" class="d-block w-100" alt="" />
      </div>
      <div class="carousel-item">
        <img src="@/assets/blog/Github.svg" class="d-block w-100" alt="" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 765px) {
  .carousel {
    width: 30rem;
  }
}
</style>
