<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  value: number;
}>();

const normalizedValue = computed(() => {
  return Math.min(Math.max(props.value, 0), 100);
});

const color = computed(() => {
  if (normalizedValue.value > 66) {
    return "var(--color-success)";
  } else if (normalizedValue.value > 33) {
    return "var(--color-warn)";
  }
  return "var(--color-alert)";
});
</script>

<style scoped>
.battery-status {
  width: 100%;
  min-height: var(--grid-gap-2);
  background: var(--color-border-main);
  border-radius: var(--border-radius-2);
  position: relative;
  overflow: hidden;
}

.battery-status__inner,
.battery-status__value {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}

.battery-status__value {
  display: flex;
  align-items: center;
  right: 0;
  justify-content: center;
  font-size: var(--font-size-xs);
}
</style>

<template>
  <div class="battery-status">
    <div class="battery-status__inner" :style="{ backgroundColor: color, width: `${normalizedValue}%` }"></div>
    <div class="battery-status__value">{{ normalizedValue }}%</div>
  </div>
</template>
