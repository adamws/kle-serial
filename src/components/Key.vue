<script setup>
import { computed, reactive, ref } from "vue";
import * as kle from "@ijprest/kle-serial";

const props = defineProps([
  "x",
  "y",
  "width",
  "height",
  "rotationX",
  "rotationY",
  "rotationAngle",
]);

const usize = ref(54);

const position = computed(() => {
  return {
    position: "absolute",
    left: usize.value * props.x + "px",
    top: usize.value * props.y + "px",
  };
});

const size = computed(() => {
  return {
    width: usize.value * props.width + "px",
    height: usize.value * props.height + "px",
  };
});

const sizeKeytop = computed(() => {
  return {
    width: usize.value * props.width - 12 + "px",
    height: usize.value * props.height - 12 + "px",
  };
});

const rotation = computed(() => {
  if (props.rotationAngle !== 0) {
    return {
      transform: `rotate(${props.rotationAngle}deg)`,
      transformOrigin: `${usize.value * props.rotationX}px ${
        usize.value * props.rotationY
      }px`,
    };
  }
  return {};
});
</script>

<template>
  <div class="key" :style="rotation">
    <div id="keycap" :style="position">
      <div class="keyborder" :style="size" />
      <div class="keytop" :style="sizeKeytop" />
    </div>
  </div>
</template>

<style scoped>
.key {
  position: relative;
}
#keycap > * {
  position: absolute;
  box-sizing: border-box;
  background-clip: padding-box;
}
.keyborder {
  left: 0px;
  top: 0px;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #000;
  background-color: #cccccc;
}
.keytop {
  left: 6px;
  top: 3px;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  background-color: #fcfcfc;
}
</style>
