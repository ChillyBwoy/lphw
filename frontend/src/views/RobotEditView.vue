<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import { routes } from "@/router/routes";
import { useFetchData } from "@/hooks/useFetchData";
import SuspendStatus from "@/components/SuspendStatus.vue";
import PageTitle from "@/components/PageTitle.vue";
import RobotForm from "@/components/Robot/RobotForm.vue";
import type { Robot, RobotUpdate } from "@/client";

const route = useRoute();
const router = useRouter();
const apiClient = useApiClient();

const id = route.params.id as string;

const [updateRobot, $updateRobotData, $updateRobotStatus, $updateRobotError] = useFetchDataFunc(
  (payload: RobotUpdate) => {
    return apiClient.robots.update({ robotId: id, requestBody: payload });
  },
);

watch(
  () => $updateRobotStatus.value,
  (status) => {
    if (status === "success" && $updateRobotData.value) {
      router.push(routes.robot($updateRobotData.value.id));
    }
  },
);

const [$robotData, $robotStatus] = useFetchData(apiClient.robots.show({ id }));

const handleSubmit = (payload: Partial<Robot>) => {
  updateRobot(payload as RobotUpdate);
};
</script>

<template>
  <SuspendStatus :status="$robotStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template v-if="$robotData" #success>
      <PageTitle :backUrl="routes.robot($robotData.id)">Edit {{ $robotData.name }}</PageTitle>
      <RobotForm
        @submit="handleSubmit"
        :robot="$robotData"
        :errors="$updateRobotError?.body.errors"
        :disabled="$updateRobotStatus === 'loading'"
      />
    </template>
  </SuspendStatus>
</template>
