import "tailwindcss/tailwind.css";
import "vue-litewind/style.css" 

// import classes for all components

// import "./styles/components.css";
import "vue-litewind/vue-litewind.css";
// import "vue-litewind/styles/button.css";

import { defineAsyncComponent } from "vue"
import { componentPlugin, components, grid, directives } from "vue-litewind";
import EventViewer from "./components/EventViewer.vue"
import vSelectProp from "./components/vSelectProp.vue"

import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App);

app.component("EventViewer", EventViewer)
app.component("vSelectProp", vSelectProp)

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

app.provide("examples", exampleComponents)

app.use(componentPlugin, {
  components,
  grid,
  directives,
}); 

app.mount('#app')
