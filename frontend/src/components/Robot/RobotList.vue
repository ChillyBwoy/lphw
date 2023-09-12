<script lang="ts" setup>
import type { Robot } from "@/client";
import RobotListItem from "@/components/Robot/RobotListItem.vue";

const props = defineProps<{
  robots: Array<Robot>;
}>();
</script>

<template>
  <ul class="robot-list">
    <li v-for="robot in props.robots" :key="robot.id" class="robot-list__item">
      <RobotListItem :robot="robot" />
    </li>
  </ul>
</template>

<style scoped>
.robot-list {
  display: flex;
  flex-direction: column;
}

.robot-list__item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-gray);
}

.robot-list__item:last-child {
  border-bottom: none;
}
</style>
