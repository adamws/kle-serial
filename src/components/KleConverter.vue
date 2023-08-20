<script setup>
import { computed, reactive, ref } from "vue";
import FileSaver from "file-saver";
import JsonEditorVue from "json-editor-vue";
import * as kle from "@ijprest/kle-serial";
import KeyboardRender from "./KeyboardRender.vue";

const editorsPanelRef = ref(null);
const jsonEditorRef = ref(null);

const layout = ref({
  json: [],
  text: undefined,
});

const keys = ref([]);
const keyboard = ref({
  json: undefined,
  text: JSON.stringify(kle.Serial.deserialize([]), null, 2),
});

const resize = reactive({
  isActive: false,
});

const styleEditorPanel = reactive({
  flexShrink: 1,
  flexBasis: "0%",
  overflowX: "scroll",
});

const styleLeftPanel = reactive({
  flexGrow: 0.7,
});

const styleRightPanel = computed(() => {
  return {
    flexGrow: 1 - styleLeftPanel.flexGrow,
  };
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
    keys.value = k.keys;
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

function resizeMove(event) {
  if (!resize.isActive) {
    return false;
  }
  event.preventDefault();

  let pointerRelativeXpos = event.clientX - editorsPanelRef.value.offsetLeft;
  styleLeftPanel.flexGrow =
    pointerRelativeXpos / editorsPanelRef.value.clientWidth;
}
</script>

<template>
  <div class="up">
    <div class="editors-panel" ref="editorsPanelRef">
      <div :style="[styleEditorPanel, styleLeftPanel]">
        <JsonEditorVue
          ref="jsonEditorRef"
          class="json-editor"
          :content="layout"
          :onChange="onLayoutChange"
          :main-menu-bar="true"
          :status-bar="true"
        />
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
      <div
        class="center-panel"
        @mousemove="resizeMove"
        @mouseleave="resizeMove"
        @mousedown="
          (event) => {
            event.preventDefault();
            resize.isActive = true;
          }
        "
        @mouseup="
          (event) => {
            resize.isActive = false;
          }
        "
      />
      <div :style="[styleEditorPanel, styleRightPanel]">
        <JsonEditorVue
          class="json-editor"
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
    </div>
  </div>
  <div class="down">
    <KeyboardRender :keys="keys" />
  </div>
</template>

<style scoped>
.editors-panel {
  display: flex;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
}

.center-panel {
  width: 60px;
  cursor: col-resize;
}

.json-editor {
  height: 400px;
  min-height: 0;
  min-width: 0;
  margin-bottom: 5px;
}
</style>
