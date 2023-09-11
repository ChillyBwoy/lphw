<script lang="ts" setup>
import type { Robot } from "@/client";

const props = defineProps<{
  index: number;
  robot: Robot;
}>();
</script>

<template>
  <div class="robot-list-item">
    <div class="robot-list-item__index">{{ props.index }}</div>
    <div class="robot-list-item__name">
      <a :href="`/robots/show/${robot.id}`">{{ props.robot.name }}</a>
    </div>
  </div>
</template>

<style scoped>
.robot-list-item {
  width: 100%;
  display: grid;
  grid-template-columns: var(--grid-gap-3) 1fr;
  padding: var(--grid-gap-2) 0;
  gap: var(--grid-gap-1);
}

.robot-list-item__index,
.robot-list-item__name {
  display: flex;
  align-items: center;
}

.robot-list-item__index {
}

.robot-list-item__name {
  font-weight: 500;
  font-size: var(--font-size-l);
}
</style>
