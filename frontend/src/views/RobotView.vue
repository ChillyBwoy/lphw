<script setup lang="ts">
import { useRoute } from "vue-router";
import { useFetchData } from "@/hooks/useFetchData";
import { useApiClient } from "@/hooks/useApiClient";
import SuspendStatus from "@/components/SuspendStatus.vue";
import PageTitle from "@/components/PageTitle.vue";
import { routes } from "@/router/routes";

const route = useRoute();

const apiClient = useApiClient();
const id = route.params.id as string;

const [$robotData, $robotStatus] = useFetchData(apiClient.robots.show({ id }));
</script>

<template>
  <SuspendStatus :status="$robotStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template v-if="$robotData" #success>
      <PageTitle :backUrl="routes.robotList()">{{ $robotData.name }}</PageTitle>
    </template>
  </SuspendStatus>
</template>
