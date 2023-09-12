<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import { routes } from "@/router/routes";
import { useFetchData } from "@/hooks/useFetchData";
import { useApiClient } from "@/hooks/useApiClient";
import SuspendStatus from "@/components/SuspendStatus.vue";
import PageTitle from "@/components/PageTitle.vue";
import FormButton from "@/components/Form/FormButton.vue";

const route = useRoute();

const apiClient = useApiClient();
const id = route.params.id as string;

const [$robotData, $robotStatus] = useFetchData(apiClient.robots.show({ id }));
</script>

<style scoped>
.robot-view__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}
</style>

<template>
  <SuspendStatus :status="$robotStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template v-if="$robotData" #success>
      <PageTitle :backUrl="routes.robotList()">{{ $robotData.name }}</PageTitle>

      <div class="robot-view__actions">
        <RouterLink :to="routes.robotEdit($robotData.id)" custom v-slot="{ navigate }">
          <FormButton size="l" @click="navigate">Edit</FormButton>
        </RouterLink>
        <FormButton color="alert" size="l"> Delete</FormButton>
      </div>
    </template>
  </SuspendStatus>
</template>
