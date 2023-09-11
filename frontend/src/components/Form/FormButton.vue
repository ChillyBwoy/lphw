<script lang="ts" setup>
const props = defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <button class="form-button" :class="{ 'form-button_active': props.active }" v-bind="props">
    <slot></slot>
  </button>
</template>

<style scoped>
.form-button {
  padding: 0 var(--grid-gap-2);
  font-weight: 600;
  border-radius: var(--border-radius-2);
  min-height: 3rem;
  cursor: pointer;
  background-color: var(--color-text-secondary);
  color: var(--color-text-white);
}

.form-button:disabled {
  opacity: 0.5;
  cursor: default;
}

.form-button_active {
  background-color: var(--color-link);
  color: var(--color-white);
}
</style>
