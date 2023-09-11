<script setup lang="ts">
import { ref, watch } from "vue";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import RobotList from "@/components/RobotList.vue";
import SuspendStatus from "@/components/SuspendStatus.vue";
import ListPagination from "@/components/ListPagination.vue";
import PageTitle from "@/components/PageTitle.vue";

const apiClient = useApiClient();

const $page = ref(1);

const pageSize = 15;

const [fetchRobots, $robotsData, $robotsStatus] = useFetchDataFunc((page: number) => {
  return apiClient.robots.list({
    size: pageSize,
    page,
  });
});

watch($page, () => {
  fetchRobots($page.value);
});

fetchRobots($page.value);
</script>

<style scoped>
.robot-list-view__pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>

<template>
  <PageTitle>Robots</PageTitle>
  <SuspendStatus :status="$robotsStatus">
    <template #loading>Loading...</template>
    <template #error>Error</template>
    <template #success v-if="$robotsData">
      <RobotList :robots="$robotsData.items" :page="$page" :pageSize="pageSize" />
      <div class="robot-list-view__pagination">
        <ListPagination
          v-if="$robotsData.pages"
          :disabled="$robotsStatus === 'loading'"
          :pages="$robotsData.pages"
          :pageSize="pageSize"
          :offset="1"
          v-model="$page"
        />
      </div>
    </template>
  </SuspendStatus>
</template>
