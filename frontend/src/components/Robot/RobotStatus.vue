<script lang="ts" setup>
import { computed } from "vue";
import PauseCircleIcon from "@heroicons/vue/24/solid/PauseCircleIcon";
import Battery50Icon from "@heroicons/vue/24/solid/Battery50Icon";
import XCircleIcon from "@heroicons/vue/24/solid/XCircleIcon";
import ExclamationCircleIcon from "@heroicons/vue/24/solid/ExclamationCircleIcon";
import PlayCircleIcon from "@heroicons/vue/24/solid/PlayCircleIcon";
import { RobotStatus } from "@/client/models/RobotStatus";

const props = defineProps<{
  status: RobotStatus;
}>();

const Icon = computed(() => {
  switch (props.status) {
    case RobotStatus.PAUSED:
      return PauseCircleIcon;
    case RobotStatus.CHARGING:
      return Battery50Icon;
    case RobotStatus.ERROR:
      return ExclamationCircleIcon;
    case RobotStatus.IDLE:
      return XCircleIcon;
    case RobotStatus.MOVING:
      return PlayCircleIcon;
    default:
      return XCircleIcon;
  }
});

const color = computed(() => {
  switch (props.status) {
    case RobotStatus.PAUSED:
      return "var(--color-warn)";
    case RobotStatus.CHARGING:
      return "var(--color-success)";
    case RobotStatus.ERROR:
      return "var(--color-alert)";
    case RobotStatus.IDLE:
      return "var(--color-gray)";
    case RobotStatus.MOVING:
      return "var(--color-success)";
    default:
      return "var(--color-gray)";
  }
});
</script>

<style scoped>
.robot-status {
  display: flex;
  align-items: center;
  gap: var(--grid-gap-05);
}
.robot-status svg {
  width: var(--icon-size-xl);
  height: var(--icon-size-xl);
  color: v-bind(color);
}
</style>

<template>
  <div class="robot-status" :title="props.status">
    <Icon />
  </div>
</template>
