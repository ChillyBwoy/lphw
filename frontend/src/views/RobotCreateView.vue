<script setup lang="ts">
import { watch } from "vue";
import { useRouter } from "vue-router";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import { routes } from "@/router/routes";
import RobotForm from "@/components/Robot/RobotForm.vue";
import PageTitle from "@/components/PageTitle.vue";
import type { Robot, RobotCreate } from "@/client";

const router = useRouter();
const apiClient = useApiClient();

const [createRobot, $createRobotData, $createRobotStatus, $createRobotError] = useFetchDataFunc(
  (payload: RobotCreate) => {
    return apiClient.robots.create({ requestBody: payload });
  },
);

watch(
  () => $createRobotStatus.value,
  (status) => {
    if (status === "success" && $createRobotData.value) {
      router.push(routes.robot($createRobotData.value.id));
    }
  },
);

const handleSubmit = (robot: Partial<Robot>) => {
  createRobot(robot as RobotCreate);
};
</script>

<template>
  <PageTitle>Robot Create</PageTitle>
  <RobotForm
    @submit="handleSubmit"
    :errors="$createRobotError?.body.errors"
    :disabled="$createRobotStatus === 'loading'"
  />
</template>
