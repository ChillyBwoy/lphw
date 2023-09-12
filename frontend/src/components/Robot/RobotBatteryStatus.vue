<script lang="ts" setup>
const props = defineProps<{
  remaining: number;
  health: number;
}>();

const getColor = (value: number) => {
  if (value > 66) {
    return "var(--color-success)";
  } else if (value > 33) {
    return "var(--color-warn)";
  }
  return "var(--color-alert)";
};
</script>

<style scoped>
.robot-battery-status {
  width: 100%;
  min-height: var(--spacing-3);
  background: var(--color-border-primary);
  border-radius: var(--border-radius-2);
  position: relative;
  overflow: hidden;
}

.robot-battery-status__inner {
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  right: 0;
}

.robot-battery-status__inner:first-child {
  border-bottom-right-radius: var(--border-radius-2);
  top: 0;
  bottom: 50%;
}
.robot-battery-status__inner:last-child {
  border-top-right-radius: var(--border-radius-2);
  bottom: 0;
  top: 50%;
}

.robot-battery-status__value {
  color: var(--color-text-primary);
  font-size: var(--font-size-xs);
  padding-left: var(--spacing-1);
}
</style>

<template>
  <div class="robot-battery-status">
    <div
      class="robot-battery-status__inner"
      :style="{ backgroundColor: getColor(props.remaining), width: `${props.remaining}%` }"
    >
      <span class="robot-battery-status__value">{{ props.remaining }}%</span>
    </div>
    <div
      class="robot-battery-status__inner"
      :style="{ backgroundColor: getColor(props.health), width: `${props.health}%` }"
    >
      <span class="robot-battery-status__value">{{ props.health }}%</span>
    </div>
  </div>
</template>
