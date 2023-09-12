<script setup lang="ts">
import { ref, watch } from "vue";
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
  <PageTitle>
    <template #default>Robots</template>
    <template #side>
      <RouterLink :to="routes.robotCreate()" custom v-slot="{ navigate }">
        <FormButton color="secondary" size="l" @click="navigate">
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
      <RobotList :robots="$robotsData.items" />
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
