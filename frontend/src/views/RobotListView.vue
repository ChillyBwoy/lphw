<script setup lang="ts">
import { ref, watch } from "vue";
import type { RobotStatus } from "@/client";
import { routes } from "@/router/routes";
import PlusIcon from "@heroicons/vue/24/outline/PlusIcon";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import FormButton from "@/components/Form/FormButton.vue";
import IconContainer from "@/components/IconContainer.vue";
import ListPagination from "@/components/ListPagination.vue";
import PageTitle from "@/components/PageTitle.vue";
import RobotList from "@/components/Robot/RobotList.vue";
import SuspendStatus from "@/components/SuspendStatus.vue";
import RobotSearchForm, { type RobotSearchFormParams } from "@/components/Robot/RobotSearchForm.vue";

interface RobotSeachParams {
  page: number;
  systemStatus?: RobotStatus | null;
  connected?: boolean;
  orderBy?: string;
  orderDirection?: string;
}

const apiClient = useApiClient();

const $page = ref(1);

const pageSize = 15;

const $filterModel = ref<Partial<RobotSearchFormParams>>({});

const [fetchRobots, $robotsData, $robotsStatus] = useFetchDataFunc((params: RobotSeachParams) => {
  return apiClient.robots.list({
    size: pageSize,
    page: params.page,
    systemStatus: params.systemStatus,
    connected: params.connected,
    orderBy: params.orderBy,
    orderDirection: params.orderDirection,
  });
});

const doSearch = () => {
  let connected: boolean | undefined = undefined;
  if ($filterModel.value.connected === "true") {
    connected = true;
  } else if ($filterModel.value.connected === "false") {
    connected = false;
  }

  fetchRobots({
    page: $page.value,
    systemStatus: $filterModel.value.systemStatus || undefined,
    connected,
    orderBy: $filterModel.value.orderBy || undefined,
    orderDirection: $filterModel.value.orderDirection || undefined,
  });
};
watch(
  () => $filterModel,
  () => {
    doSearch();
  },
  { deep: true },
);

watch($page, () => {
  doSearch();
});

doSearch();
</script>

<style scoped>
.robot-list-view__pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.robot-list-view__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

@media (min-width: 768px) {
  .robot-list-view__body {
    display: grid;
    grid-template-columns: 20% 1fr;
    gap: var(--spacing-2);
  }
}
</style>

<template>
  <PageTitle>
    <template #default>
      Robots
      <template v-if="$robotsData?.total">({{ $robotsData?.total }})</template>
    </template>
    <template #side>
      <RouterLink :to="routes.robotCreate()" custom v-slot="{ navigate }">
        <FormButton size="l" @click="navigate">
          New
          <IconContainer>
            <PlusIcon />
          </IconContainer>
        </FormButton>
      </RouterLink>
    </template>
  </PageTitle>
  <SuspendStatus :status="$robotsStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template #success v-if="$robotsData">
      <div class="robot-list-view__body">
        <RobotSearchForm v-model="$filterModel" />
        <div>
          <RobotList :robots="$robotsData.items" />
          <div class="robot-list-view__pagination">
            <ListPagination
              v-if="$robotsData.pages && $robotsData.pages > 1"
              :disabled="$robotsStatus === 'loading'"
              :pages="$robotsData.pages"
              :pageSize="pageSize"
              :offset="1"
              v-model="$page"
            />
          </div>
        </div>
      </div>
    </template>
  </SuspendStatus>
</template>
