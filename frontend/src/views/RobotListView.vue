<script setup lang="ts">
import { ApiClient } from "@/client";
import { useFetchData } from "@/hooks/useFetchData";

import RobotList from "@/components/RobotList.vue";

const apiClient = new ApiClient({
  BASE: "http://localhost:8000",
});

const fetchRobots = () =>
  apiClient.robots.list({
    size: 10,
  });

const [$robotsData, $robotsStatus] = useFetchData(fetchRobots, true);
</script>

<template>
  <h1>Robots</h1>

  <div v-if="$robotsStatus === 'loading'">Loading...</div>
  <div v-if="$robotsStatus === 'error'">Error</div>
  <div v-if="$robotsStatus === 'success' && $robotsData">
    <RobotList :robots="$robotsData.items" />
  </div>
</template>
