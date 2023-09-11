<script lang="ts" setup></script>

<style scoped>
.form-select {
  width: 100%;
  box-sizing: border-box;
  padding: 0 var(--grid-gap-1);
  border: 1px solid var(--color-border-main);
  border-radius: 0.25rem;
  height: 2.5rem;
}
</style>

<template>
  <select class="form-select">
    <slot></slot>
  </select>
</template>
