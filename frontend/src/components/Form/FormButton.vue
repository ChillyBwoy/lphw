<script lang="ts" setup></script>

<template>
  <button class="form-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.form-button {
  padding: 0 1rem;
  font-weight: normal;
  border-radius: 0.25rem;
  height: 3rem;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
