<script lang="ts" setup>
import type { Robot } from "@/client";
import RobotBatteryStatus from "@/components/Robot/RobotBatteryStatus.vue";
import RobotStatus from "@/components/Robot/RobotStatus.vue";
import RobotConnected from "./RobotConnected.vue";

const props = defineProps<{
  robot: Robot;
}>();
</script>

<style scoped>
.robot-specs {
  flex: 1;
  width: 100%;
  display: grid;
  gap: var(--spacing-2) var(--spacing-3);
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(auto-fill, auto);
}

.robot-specs dt {
  display: flex;
  align-items: center;
}

.robot-specs dd {
  font-size: var(--font-size-l);
  font-weight: 600;
  display: flex;
  align-items: center;
}

.robot-specs__battery {
  height: var(--spacing-5);
}
</style>

<template>
  <dl class="robot-specs">
    <dt>Model</dt>
    <dd>{{ props.robot.model }}</dd>

    <dt>Software Version</dt>
    <dd>{{ props.robot.software_version }}</dd>

    <dt>Serial Number</dt>
    <dd>{{ props.robot.serial_number }}</dd>

    <dt>IP Address</dt>
    <dd>{{ props.robot.ip_address }}</dd>

    <dt>Connected</dt>
    <dd>
      <RobotConnected :connected="Boolean(props.robot.connected)" />
    </dd>

    <dt>System Status</dt>
    <dd>
      <RobotStatus :status="props.robot.system_status" />
    </dd>
    <template v-if="props.robot.battery_health && props.robot.remaining_battery">
      <dt>Battery</dt>
      <dd>
        <RobotBatteryStatus
          class="robot-specs__battery"
          :health="props.robot.battery_health"
          :remaining="props.robot.remaining_battery"
        />
      </dd>
    </template>
  </dl>
</template>
