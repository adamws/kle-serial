<template>
  <div class="header">
    <div><b>KLE converter</b></div>
    <div>
      Convert json layout generated by
      <a href="http://www.keyboard-layout-editor.com">keyboard-layout-editor</a>
      to it's internal form.
    </div>
  </div>
  <KleConverter />
  <div class="footer">
    <a href="https://github.com/adamws/kle-serial"><img :src="githubIcon" /></a>
  </div>
</template>

<script>
import KleConverter from "./components/KleConverter.vue";
import githubIcon from "./assets/GitHub-Mark-32px.png";

export default {
  name: "App",
  data() {
    return {
      githubIcon: githubIcon,
    };
  },
  components: {
    KleConverter,
  },
};
</script>

<style scoped></style>
