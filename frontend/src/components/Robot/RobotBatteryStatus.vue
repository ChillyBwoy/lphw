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
  background: var(--color-border-primary);
  border-radius: var(--border-radius-2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.robot-battery-status__value {
  flex: 1;
  color: var(--color-white);
  font-size: var(--font-size-s);
  padding-left: var(--spacing-1);
  display: flex;
  align-items: center;
}
</style>

<template>
  <div class="robot-battery-status">
    <div
      class="robot-battery-status__value"
      title="Battery remaining"
      :style="{ backgroundColor: getColor(props.remaining), width: `${props.remaining}%` }"
    >
      {{ props.remaining }}%
    </div>
    <div
      class="robot-battery-status__value"
      title="Battery health"
      :style="{ backgroundColor: getColor(props.health), width: `${props.health}%` }"
    >
      {{ props.health }}%
    </div>
  </div>
</template>
