<script setup lang="ts">
import AppNavigation from "@/components/AppNavigation.vue";
</script>

<style scoped>
.app-layout__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--grid-gap-1);
  background-color: var(--header-bg);
  box-shadow: -1px 6px 11px 1px rgba(0, 0, 0, 0.3);
}

.app-layout__body {
  padding-top: var(--grid-gap-2);
  margin: 0 var(--grid-gap-5);
}
</style>

<template>
  <div>
    <header class="app-layout__header">
      <AppNavigation />
    </header>
    <main class="app-layout__body">
      <slot></slot>
    </main>
  </div>
</template>
