<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { routes } from "@/router/routes";
import type { Robot } from "@/client";
import BatteryStatus from "@/components/BatteryStatus.vue";
import RobotStatus from "@/components/RobotStatus.vue";

const props = defineProps<{
  index: number;
  robot: Robot;
}>();
</script>

<template>
  <div class="robot-list-item">
    <div class="robot-list-item__index">{{ props.index }}</div>
    <div class="robot-list-item__name">
      <RouterLink :to="routes.robot(robot.id)" class="robot-list-item__link">
        {{ props.robot.name }}{{ props.robot.name }}
      </RouterLink>
    </div>
    <div class="robot-list-item__status">
      <RobotStatus :status="robot.system_status" />
    </div>
    <div class="robot-list-item__battery">
      <BatteryStatus :value="robot.remaining_battery" />
      <BatteryStatus :value="robot.battery_health" />
    </div>
  </div>
</template>

<style scoped>
.robot-list-item {
  width: 100%;
  display: grid;
  grid-template-columns: 7% 1fr auto 20%;
  padding: var(--grid-gap-2) 0;
  gap: var(--grid-gap-1);
}

.robot-list-item__index,
.robot-list-item__name,
.robot-list-item__status {
  display: flex;
  align-items: center;
}

.robot-list-item__name {
  font-weight: 500;
  font-size: var(--font-size-l);
}

.robot-list-item__link {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;
}

.robot-list-item__battery {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--grid-gap-1);
}
</style>
