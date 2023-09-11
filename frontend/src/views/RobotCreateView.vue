<script setup lang="ts">
import { watch } from "vue";
import { useRouter } from "vue-router";
import type { RobotCreate } from "@/client";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import { routes } from "@/router/routes";
import RobotCreateForm from "@/components/RobotCreateForm.vue";
import PageTitle from "@/components/PageTitle.vue";

const apiClient = useApiClient();
const router = useRouter();

const [createRobot, $createRobotData, $createRobotStatus, $createRobotError] = useFetchDataFunc(
  (payload: RobotCreate) => {
    return apiClient.robots.create({ requestBody: payload });
  },
);

const handleSubmit = (payload: RobotCreate) => {
  createRobot(payload);
};

watch(
  () => $createRobotStatus.value,
  (status) => {
    if (status === "success" && $createRobotData.value) {
      router.push(routes.robot($createRobotData.value.id));
    }
  },
);
</script>

<template>
  <PageTitle>Robot Create</PageTitle>
  <RobotCreateForm @submit="handleSubmit" :errors="$createRobotError?.body.errors" />
</template>
