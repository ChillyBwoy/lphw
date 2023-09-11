<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  active?: boolean;
  size?: "s" | "m" | "l";
  fullWidth?: boolean;
}>();

const size = computed(() => {
  switch (props.size) {
    case "s":
      return "form-button_s";
    case "l":
      return "form-button_l";
    default:
      return "form-button_m";
  }
});

const buttonClassName = computed(() => {
  return {
    "form-button_active": props.active,
    "form-button_full": props.fullWidth,
    [size.value]: true,
  };
});
</script>

<template>
  <button class="form-button" :class="buttonClassName" v-bind="props">
    <slot></slot>
  </button>
</template>

<style scoped>
.form-button {
  padding: 0 var(--grid-gap-2);
  box-sizing: border-box;
  font-weight: 600;
  font-size: var(--font-size-m);
  border-radius: var(--border-radius-2);
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

.form-button_s {
  min-width: var(--grid-gap-2);
  min-height: var(--grid-gap-2);
}
.form-button_m {
  min-width: var(--grid-gap-3);
  min-height: var(--grid-gap-3);
}
.form-button_l {
  min-width: var(--grid-gap-4);
  min-height: var(--grid-gap-4);
}

.form-button_full {
  width: 100%;
  min-width: 0;
  padding: 0;
}
</style>
