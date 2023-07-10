<script setup>
import { inject } from "vue";

let examples = inject("examples");
let version = inject("version");

document.documentElement.classList.add("dark");
</script>

<template>
  <v-container class="text-text-800 dark:bg-[#191919] dark:text-[#bcbfc5]">
    <v-row>
      <v-col class="mx-auto max-w-screen-lg grow">

        <h2 class="my-10 text-3xl font-bold">Vue-Litewind test page ({{ version }})</h2>

        <template v-for="example in examples">
          <h4 class="text-xl font-semibold text-text-100">
            {{ example.replace("Example", "") }}
          </h4>
          <div
            class="my-10 overflow-auto rounded-md border bg-secondary-50 p-6 py-8 dark:border-dark-700 dark:bg-[#171717]"
          >
            <div class="my-4">
              <component :is="example"></component>
            </div>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
body {
  @apply dark:bg-[#191919];
}

.column-content {
  @apply rounded
    border
    border-dark-500
    bg-secondary-200
    p-2
    dark:border-dark-400
    dark:bg-dark-700;
}
.nested-column-content {
  @apply rounded
    border-2
    border-red-400
    bg-secondary-200
    p-2
    dark:border-red-400
    dark:bg-dark-700;
}

label {
  @apply mr-2;
}
</style>
