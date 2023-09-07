<script lang="ts" setup>
import type { Robot } from "@/client";
import RobotListItem from "./RobotListItem.vue";

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
.robot-list {}

.robot-list__item {}
</style>