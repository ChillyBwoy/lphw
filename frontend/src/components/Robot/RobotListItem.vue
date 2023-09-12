<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { routes } from "@/router/routes";
import type { Robot } from "@/client";
import RobotBatteryStatus from "@/components/Robot/RobotBatteryStatus.vue";
import RobotStatus from "@/components/Robot/RobotStatus.vue";
import RobotConnected from "@/components/Robot/RobotConnected.vue";

const props = defineProps<{
  robot: Robot;
}>();
</script>

<template>
  <div class="robot-list-item">
    <div class="robot-list-item__status">
      <RobotConnected :connected="Boolean(props.robot.connected)" />
    </div>
    <div class="robot-list-item__status">
      <RobotStatus :status="robot.system_status" />
    </div>
    <div class="robot-list-item__name">
      <RouterLink :to="routes.robot(robot.id)" class="robot-list-item__link">
        {{ props.robot.name }}
      </RouterLink>
    </div>
    <RobotBatteryStatus
      v-if="robot.remaining_battery && robot.battery_health"
      :remaining="robot.remaining_battery"
      :health="robot.battery_health"
    />
    <div v-else>no info</div>
  </div>
</template>

<style scoped>
.robot-list-item {
  width: 100%;
  display: grid;
  padding: var(--spacing-1) 0;
  gap: var(--spacing-1);
  grid-template-columns: auto auto 1fr 25%;
}

@media (min-width: 768px) {
  .robot-list-item {
    padding: var(--spacing-2) 0;
  }
}

.robot-list-item__status,
.robot-list-item__name {
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
</style>
