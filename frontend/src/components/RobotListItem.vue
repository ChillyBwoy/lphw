<script lang="ts" setup>
import type { Robot } from "@/client";
const props = defineProps<{
  robot: Robot;
}>();
</script>

<template>
  <div class="robot-list-item">
    <a :href="`/robots/show/${robot.id}`">{{ props.robot.name }}</a>
  </div>
</template>

<style scoped>
.robot-list-item {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
