<script setup lang="ts">
import MarkdownPreview from "@/components/MarkdownPreview.vue";
import Readme from "../../README.md";
</script>

<template>
  <main>
    <MarkdownPreview>
      <Readme />
    </MarkdownPreview>
  </main>
</template>
