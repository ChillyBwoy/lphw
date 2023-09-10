<script setup lang="ts">
import { useFetchData } from "@/hooks/useFetchData";
import { useApiClient } from "@/hooks/useApiClient";
import RobotList from "@/components/RobotList.vue";
import SuspendStatus from "@/components/SuspendStatus.vue";

const apiClient = useApiClient();

const [$robotsData, $robotsStatus] = useFetchData(apiClient.robots.list({}));
</script>

<template>
  <h1>Robot List</h1>
  <SuspendStatus :status="$robotsStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template #success>
      <RobotList :robots="$robotsData.items" />
    </template>
  </SuspendStatus>
</template>
