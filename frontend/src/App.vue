<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/robots">Robots</RouterLink></li>
        <li><RouterLink to="/robots/create">Add Robot</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
