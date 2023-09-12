<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "s" | "m" | "l";
    fullWidth?: boolean;
    color?: "primary" | "secondary" | "warn" | "success" | "alert";
  }>(),
  {
    color: "primary",
    size: "m",
  },
);

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

const bgColor = computed(() => {
  switch (props.color) {
    case "primary":
      return "var(--color-link)";
    case "secondary":
      return "var(--color-text-secondary)";
    case "warn":
      return "var(--color-warn)";
    case "success":
      return "var(--color-success)";
    case "alert":
      return "var(--color-alert)";
    default:
      return "var(--color-link)";
  }
});

const buttonClassName = computed(() => {
  return {
    "form-button": true,
    "form-button_full": props.fullWidth,
    [size.value]: true,
  };
});
</script>

<template>
  <button :class="buttonClassName" :style="{ backgroundColor: bgColor }" v-bind="props">
    <slot></slot>
  </button>
</template>

<style scoped>
.form-button {
  padding: 0 var(--spacing-2);
  box-sizing: border-box;
  font-weight: 600;
  font-size: var(--font-size-m);
  border-radius: var(--border-radius-2);
  cursor: pointer;
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-1);
}

.form-button:disabled {
  opacity: 0.5;
  cursor: default;
}

.form-button_s {
  min-width: var(--spacing-2);
  min-height: var(--spacing-2);
}
.form-button_m {
  min-width: var(--spacing-3);
  min-height: var(--spacing-3);
}
.form-button_l {
  min-width: var(--spacing-4);
  min-height: var(--spacing-4);
}

.form-button_full {
  width: 100%;
  min-width: 0;
  padding: 0;
}
</style>
