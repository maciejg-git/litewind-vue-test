import { defineAsyncComponent } from "vue"
import { createApp } from 'vue'
import App from './App.vue'
import EventViewer from "./components/EventViewer.vue"
import vSelectProp from "./components/vSelectProp.vue"

import "tailwindcss/tailwind.css";

import "vue-litewind/vue-litewind.css" 
// import "./styles/components.css";
// import "vue-litewind/components.css";
// import "vue-litewind/components/button.css";

import { vueLitewind, components, grid, directives } from "vue-litewind";

let app = createApp(App);

let exampleComponents = []

const icons = import.meta.globEager('./components/examples/icons/*.js')
Object.entries(icons).forEach(([path, definition]) => {
  let { vendor, name, type } = definition.default.$_icon
  app.component(`${vendor}${name}${type.join("")}`, definition.default)
})

const examples = import.meta.glob('./components/examples/Example*.vue')
for (const path in examples) {
  let file = path.replace(/^.*[\\\/]/, '')
  file = file.substring(0, file.lastIndexOf('.'))
  exampleComponents.push(file)
  app.component(file, defineAsyncComponent(examples[path]))
}

app.component("EventViewer", EventViewer)
app.component("vSelectProp", vSelectProp)
app.provide("examples", exampleComponents)

app.use(vueLitewind, {
  components,
  grid,
  directives,
}); 

app.mount('#app')
