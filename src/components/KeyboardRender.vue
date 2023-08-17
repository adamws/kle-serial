<script setup>
import { computed, reactive, ref } from "vue";
import Key from "./Key.vue";

const props = defineProps(["keys"]);
</script>

<template>
  <div class="keyboard">
    <Key
      v-for="(key, index) in props.keys"
      :key="index"
      :x="key.x"
      :y="key.y"
      :width="key.width"
      :height="key.height"
      :rotation-x="key.rotation_x"
      :rotation-y="key.rotation_y"
      :rotation-angle="key.rotation_angle"
    />
  </div>
</template>

<style scoped>
.keyboard {
  width: 100%;
  min-height: calc(10 * 56px);
  background-color: #eeeeee;
  border-radius: 6px;
  padding: 10px;
}
</style>
