<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { routes } from "@/router/routes";
import type { Robot } from "@/client";
import BatteryStatus from "@/components/BatteryStatus.vue";
import RobotStatus from "@/components/Robot/RobotStatus.vue";

const props = defineProps<{
  robot: Robot;
}>();
</script>

<template>
  <div class="robot-list-item">
    <RobotStatus class="robot-list-item__status" :status="robot.system_status" />
    <div class="robot-list-item__name">
      <RouterLink :to="routes.robot(robot.id)" class="robot-list-item__link">
        {{ props.robot.name }}{{ props.robot.name }}
      </RouterLink>
    </div>
    <BatteryStatus class="robot-list-item__remaining-battery" :value="robot.remaining_battery" />
    <BatteryStatus class="robot-list-item__battery-health" :value="robot.battery_health" />
  </div>
</template>

<style scoped>
.robot-list-item {
  width: 100%;
  display: grid;
  padding: var(--spacing-1) 0;
  gap: var(--spacing-1);

  grid-template-columns: auto 1fr 25%;
  grid-auto-rows: minmax(auto, var(--spacing-4));

  grid-template-areas:
    "status name remaining-battery"
    "status name battery-health";
}

@media (min-width: 768px) {
  .robot-list-item {
    padding: var(--spacing-2) 0;
    grid-template-areas: "status name remaining-battery battery-health";
    grid-template-columns: auto 1fr 15% 15%;
    grid-auto-rows: minmax(auto, auto);
  }
}

.robot-list-item__name,
.robot-list-item__status {
  display: flex;
  align-items: center;
}

.robot-list-item__index {
  grid-area: index;
  margin-left: -1rem;
}

.robot-list-item__name {
  grid-area: name;
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

.robot-list-item__status {
  grid-area: status;
}

.robot-list-item__remaining-battery {
  grid-area: remaining-battery;
}

.robot-list-item__battery-health {
  grid-area: battery-health;
}

.robot-list-item__battery {
  grid-area: battery;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-1);
}
</style>
