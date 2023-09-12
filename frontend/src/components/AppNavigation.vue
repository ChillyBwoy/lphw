<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { routes } from "@/router/routes";

const urls = [
  { name: "Home", href: routes.home() },
  { name: "Robots", href: routes.robotList() },
];
</script>

<style scoped>
.app-navigation ul {
  display: flex;
  list-style: none;
  padding: 0;
  gap: var(--spacing-3);
}

.app-navigation__link {
  font-size: var(--font-size-l);
  color: var(--color-link);
  line-height: 1.5rem;
  display: inline-block;
  padding: 0 0.25rem;
  border-bottom: 1px solid var(--color-link);
}

.app-navigation__link_active {
  color: var(--color-text-secondary);
  border-bottom: none;
}
</style>

<template>
  <nav class="app-navigation">
    <ul>
      <li v-for="url in urls" :key="url.name">
        <RouterLink :to="url.href" custom v-slot="{ href, navigate, isActive }">
          <a
            class="app-navigation__link"
            :class="{ 'app-navigation__link_active': isActive }"
            :href="href"
            @click="navigate"
            >{{ url.name }}</a
          >
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
