<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFetchData } from "@/hooks/useFetchData";
import { useApiClient } from "@/hooks/useApiClient";
import SuspendStatus from "@/components/SuspendStatus.vue";

const route = useRoute();

const apiClient = useApiClient();
const id = route.params.id as string;

const [$robotData, $robotStatus] = useFetchData(apiClient.robots.show({ id }));

if ($robotStatus.value === "success") {
  console.log($robotData.value);
}
</script>

<template>
  <h1>Robot</h1>

  <SuspendStatus :status="$robotStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template v-if="$robotData" #success>
      {{ $robotData.name }}
    </template>
  </SuspendStatus>
</template>
