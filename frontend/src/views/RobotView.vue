<script setup lang="ts">
import { inject } from "vue";
import { useRoute } from "vue-router";
import { apiClientInjectKey } from "@/constants/injection";
import { useFetchData } from "@/hooks/useFetchData";
import SuspendStatus from "@/components/SuspendStatus.vue";

const route = useRoute();

const apiClient = inject(apiClientInjectKey)!;
const robotId = route.params.id as string;

const [$robotData, $robotStatus] = useFetchData(
  apiClient.robots.show({
    robotId,
  }),
);
</script>

<template>
  <h1>Robot</h1>

  <SuspendStatus :status="$robotStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template #success>
      <div>{{ $robotData.name }}</div>
    </template>
  </SuspendStatus>
</template>
