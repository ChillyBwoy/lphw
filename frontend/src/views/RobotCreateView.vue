<script setup lang="ts">
import { watch } from "vue";
import { useRouter } from "vue-router";
import type { RobotCreate } from "@/client";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import { routes } from "@/router/routes";
import RobotCreateForm from "@/components/RobotCreateForm.vue";

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
  <h1>Robot Create</h1>

  <RobotCreateForm @submit="handleSubmit" :errors="$createRobotError?.body.errors" />
</template>
