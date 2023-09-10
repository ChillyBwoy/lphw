<script setup lang="ts">
import type { RobotCreate } from "@/client";
import RobotCreateForm from "@/components/RobotCreateForm.vue";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import { watch } from "vue";
import { useRouter } from "vue-router";

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
      const nextUrl = `/robots/show/${$createRobotData.value.id}`;
      router.push(nextUrl);
    }
  },
);
</script>

<template>
  <h1>Robot Create</h1>

  <RobotCreateForm @submit="handleSubmit" />
</template>
