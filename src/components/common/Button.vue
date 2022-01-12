<template>
  <button
    data-aos="flip-up"
    :class="buttonStyle"
    class="btn btn-light fs-3 p-2"
  >
    <span>{{ msg }}</span>
    <span class="m-2"
      ><font-awesome-icon class="align-middle fs-1" :icon="icon"
    /></span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
    icon: Array,
    buttonStyle: String,
  },
});
</script>

<style lang="scss" scoped>
button {
  margin: 2rem 0;
  width: 10rem;
  font-weight: 900;
}
@media screen and (min-width: 765px) {
  button {
    width: 18rem;
    height: 5rem;
  }
}

.bubble1 {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: var(--bs-blue);
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: white;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 100%;
    right: 100%;
    width: 2.7em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--bs-blue);
    transform-origin: center;
    transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: var(--bs-light);
  }

  &:hover::before {
    transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
  }
}

.bubble2 {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #000;
  overflow: hidden;
  transition: color 0.4s ease-in-out;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 100%;
    left: 100%;
    width: 2.7em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--bs-yellow);
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #161616;
  }

  &:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
}
.bubble3 {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(0, 0%, 0%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 100%;
    right: 100%;
    width: 1.6em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #000000;
  }

  &:hover::before {
    transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
  }
}
.bubble4 {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #000;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 100%;
    left: 100%;
    width: 1.6em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, 50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #000;
  }

  &:hover::before {
    transform: translate3d(-50%, 50%, 0) scale3d(15, 15, 15);
  }
}
</style>
