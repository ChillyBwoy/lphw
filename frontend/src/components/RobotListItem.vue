<script lang="ts" setup>
import type { Robot } from "@/client";
const props = defineProps<{
  robot: Robot;
}>();
</script>

<template>
  <div class="robot-list-item">{{ props.robot.name }}</div>
</template>

<style scoped>
.robot-list-item {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
