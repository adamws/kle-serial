<template>
  <div id="app">
    <el-container>
      <el-header style="height: 20px;">
        <div>KLE converter</div>
      </el-header>
      <el-main>
        <KleConverter />
      </el-main>
      <el-footer>
          <div><a href="https://github.com/adamws/kle-serial"><img :src="githubIcon"/></a></div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import KleConverter from './components/KleConverter.vue';
import githubIcon from "./assets/GitHub-Mark-32px.png";

export default {
  name: 'App',
  data() {
    return {
      githubIcon: githubIcon,
    }
  },
  components: {
    KleConverter,
  },
};
</script>

<style>
body {
  margin-top: 2%;
  padding-right: 5%;
  padding-left: 5%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media screen and (min-width: 800px) {
  body {
    padding-right: 5%;
    padding-left: 5%;
  }
}

@media screen and (min-width: 1600px) {
  body {
    padding-right: 10%;
    padding-left: 10%;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  background-color: #b3e6ff;
}

.el-header, .el-footer {
  text-align: center;
}

</style>
