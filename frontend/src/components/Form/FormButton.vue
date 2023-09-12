<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "s" | "m" | "l";
    fullWidth?: boolean;
    color?: "primary" | "secondary" | "warn" | "success" | "alert" | "transparent";
  }>(),
  {
    color: "primary",
    size: "m",
  },
);

const size = computed(() => {
  return `form-button_${props.size}`;
});

const bgColor = computed(() => {
  return `form-button_color-${props.color}`;
});

const buttonClassName = computed(() => {
  return {
    "form-button": true,
    "form-button_full": props.fullWidth,
    [bgColor.value]: true,
    [size.value]: true,
  };
});
</script>

<template>
  <button :class="buttonClassName" v-bind="props">
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

.form-button:focus {
  outline: none;
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

.form-button_color-primary {
  background-color: var(--color-link);
}
.form-button_color-secondary {
  background-color: var(--color-text-secondary);
}
.form-button_color-warn {
  background-color: var(--color-warn);
}
.form-button_color-success {
  background-color: var(--color-success);
}
.form-button_color-alert {
  background-color: var(--color-alert);
}
.form-button_color-transparent {
  background-color: transparent;
  color: var(--color-text-primary);
}

.form-button_full {
  width: 100%;
  min-width: 0;
  padding: 0;
}
</style>
