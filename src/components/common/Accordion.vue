<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item" v-for="content in contents" :key="content.id">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="content.data_bs_target"
          aria-expanded="false"
          :aria-controls="content.aria_controls"
        >
          {{ content.title }}
        </button>
      </h2>
      <div
        :id="content.text_id"
        class="accordion-collapse collapse"
        :aria-labelledby="content.aria_labelledby"
        data-bs-parent="#accordionFlushExample"
      >
        <div v-if="content.text" class="accordion-body">
          {{ content.text }}
        </div>
        <div v-if="content.commands">
          <Shell
            class="mb-3"
            v-for="command in content.commands"
            :key="command.id"
            :msg="command"
            :lang="content.lang"
          ></Shell>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Shell from "@/components/common/Shell.vue";

export default defineComponent({
  props: {
    contents: Array,
  },
  components: {
    Shell,
  },
});
</script>
