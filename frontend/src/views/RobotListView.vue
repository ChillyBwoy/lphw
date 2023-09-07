<script setup lang="ts">
import { ApiClient } from "@/client";
import { useFetchData } from "@/hooks/useFetchData";

const apiClient = new ApiClient({
  BASE: "http://localhost:8000",
});

const fetchRobots = () =>
  apiClient.robot.robotList({
    size: 10,
  });

const [$robotsData, $robotsStatus] = useFetchData(fetchRobots, true);
</script>

<template>
  <h1>Robots</h1>

  <div v-if="$robotsStatus === 'loading'">Loading...</div>
  <div v-if="$robotsStatus === 'error'">Error</div>
  <div v-if="$robotsStatus === 'success'">
    <ul>
      <li v-for="robot in $robotsData?.items" :key="robot.id">
        {{ robot.name }}
      </li>
    </ul>
  </div>
</template>
