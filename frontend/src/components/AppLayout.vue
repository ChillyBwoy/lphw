<script setup lang="ts">
import AppNavigation from "@/components/AppNavigation.vue";
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.app-layout__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--grid-gap-1);
  background-color: var(--color-bg-main);
  box-shadow: 0px var(--grid-gap-1) var(--grid-gap-2) 0 rgba(0, 0, 0, 0.2);
}

.app-layout__body {
  padding: var(--grid-gap-2) var(--layout-gap) var(--grid-gap-5) var(--layout-gap);
}

.app-layout__footer {
  margin-top: auto;
  background-color: var(--color-bg-secondary);
  min-height: var(--grid-gap-6);
}
</style>

<template>
  <div class="app-layout">
    <header class="app-layout__header">
      <AppNavigation />
    </header>
    <main class="app-layout__body">
      <slot></slot>
    </main>

    <footer class="app-layout__footer"></footer>
  </div>
</template>
