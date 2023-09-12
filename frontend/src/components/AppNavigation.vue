<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { routes } from "@/router/routes";
</script>

<style scoped>
.app-navigation ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: var(--spacing-2);
}

.app-navigation__link {
  padding: var(--spacing-1);
  display: block;
  border-radius: var(--border-radius-2);
  border: 1px solid var(--color-link);
}

.app-navigation__link:hover {
  background-color: var(--color-link);
  color: var(--color-white);
}
</style>

<template>
  <nav class="app-navigation">
    <ul>
      <li><RouterLink :to="routes.home()" class="app-navigation__link">Home</RouterLink></li>
      <li><RouterLink :to="routes.robotList()" class="app-navigation__link">Robots</RouterLink></li>
    </ul>
  </nav>
</template>
