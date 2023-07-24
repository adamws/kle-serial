<script setup>
import { reactive, ref } from "vue";
import FileSaver from "file-saver";
import JsonEditorVue from "json-editor-vue";
import * as kle from "@ijprest/kle-serial";

const jsonEditorRef = ref();

const mode = ref("text");

const layout = ref({
  json: [],
  text: undefined,
});

const keyboard = ref({
  json: undefined,
  text: JSON.stringify(kle.Serial.deserialize([]), null, 2),
});

function showFailAlert(message) {
  alert(message);
}

function triggerUpload() {
  document.getElementById("file").click();
}

function onLayoutChange() {
  const editor = jsonEditorRef.value.jsonEditor;
  const content = editor.get();

  let k = undefined;

  try {
    if (content.text === undefined) {
      k = kle.Serial.deserialize(content.json);
    } else {
      k = kle.Serial.parse(content.text);
    }
  } catch (error) {
    keyboard.value.text = "";
  }

  if (k !== undefined) {
    k.keys.forEach((key) => {
      for (const prop in key) {
        if (typeof key[prop] === "number" && !isNaN(key[prop])) {
          key[prop] = parseFloat(key[prop].toFixed(6));
        }
      }
    });
    keyboard.value.text = JSON.stringify(k, null, 2);
  }
}

function uploadLayout() {
  let file = document.getElementById("file").files[0];

  let reader = new FileReader();
  reader.readAsText(file, "UTF-8");
  reader.onload = (evt) => {
    if (file.type !== "application/json") {
      showFailAlert("Unsupported file type");
      return;
    }
    layout.value.json = JSON.parse(evt.target.result);
    layout.value.text = undefined;
  };

  reader.onerror = (evt) => {
    console.error(evt);
  };
}

function getConvertedLayout() {
  var blob = new Blob([keyboard.value.text], {
    type: "application/json;charset=utf-8",
  });
  FileSaver.saveAs(blob, "keyboard-layout-internal.json");
}
</script>

<template>
  <div class="up-left">
    <div>
      <JsonEditorVue
        ref="jsonEditorRef"
        class="json-editor"
        v-model:mode="mode"
        :content="layout"
        :onChange="onLayoutChange"
        :main-menu-bar="true"
        :status-bar="true"
      />
    </div>
    <div>
      <span style="display: flex; gap: 10px">
        <button @click="triggerUpload">Upload JSON</button>
        <input
          type="file"
          id="file"
          ref="file"
          accept=".json"
          v-on:change="uploadLayout"
          style="display: none"
        />
      </span>
    </div>
  </div>
  <div class="up-right">
    <JsonEditorVue
      class="json-editor"
      v-model:mode="mode"
      :content="keyboard"
      :onChange="
        (c) => {
          keyboard = c;
        }
      "
      :read-only="true"
      :main-menu-bar="true"
      :status-bar="true"
    />
    <div>
      <button @click="getConvertedLayout">Download</button>
    </div>
  </div>
</template>

<style scoped>
.json-editor {
  width: 100%;
  height: 900px;
}
</style>
