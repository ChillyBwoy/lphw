<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";
import PencilSquareIcon from "@heroicons/vue/24/outline/PencilSquareIcon";
import TrashIcon from "@heroicons/vue/24/solid/TrashIcon";
import router from "@/router";
import { routes } from "@/router/routes";
import { useApiClient } from "@/hooks/useApiClient";
import { useFetchData } from "@/hooks/useFetchData";
import { useFetchDataFunc } from "@/hooks/useFetchDataFunc";
import FormButton from "@/components/Form/FormButton.vue";
import IconContainer from "@/components/IconContainer.vue";
import ModalDialog from "@/components/ModalDialog.vue";
import PageTitle from "@/components/PageTitle.vue";
import RobotSpecs from "@/components/Robot/RobotSpecs.vue";
import SuspendStatus from "@/components/SuspendStatus.vue";

const route = useRoute();

const apiClient = useApiClient();
const id = route.params.id as string;

const $deleteConfirmation = ref(false);

const [$robotData, $robotStatus] = useFetchData(apiClient.robots.show({ id }));

const [deleteRobot, _, $deleteRobotStatus] = useFetchDataFunc(() => apiClient.robots.destroy({ id }));

watch(
  () => $deleteRobotStatus.value,
  (status) => {
    if (status === "success") {
      router.push(routes.robotList());
    }
  },
);

const handleClickDelete = () => {
  $deleteConfirmation.value = true;
};

const handleClickDeleteCancel = () => {
  $deleteConfirmation.value = false;
};

const handleClickDeleteConfirm = async () => {
  await deleteRobot(id);
  $deleteConfirmation.value = false;
};
</script>

<style scoped>
.robot-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.robot-view__actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3);
}

@media (min-width: 768px) {
  .robot-view__actions {
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <div class="robot-view">
    <SuspendStatus :status="$robotStatus">
      <template #loading>Loading...</template>
      <template #error>Error</template>
      <template v-if="$robotData" #success>
        <PageTitle :backUrl="routes.robotList()">
          {{ $robotData.name }}
        </PageTitle>

        <RobotSpecs :robot="$robotData" />

        <div class="robot-view__actions">
          <RouterLink :to="routes.robotEdit($robotData.id)" custom v-slot="{ navigate }">
            <FormButton size="l" @click="navigate">
              Edit
              <IconContainer>
                <PencilSquareIcon />
              </IconContainer>
            </FormButton>
          </RouterLink>
          <FormButton color="alert" size="l" @click="handleClickDelete">
            Delete
            <IconContainer>
              <TrashIcon />
            </IconContainer>
          </FormButton>

          <ModalDialog v-model="$deleteConfirmation">
            <template #title>Delete Robot</template>
            <template #default>
              <p>Are you sure you want to delete this robot?</p>
            </template>
            <template #actions>
              <FormButton size="l" color="primary" @click="handleClickDeleteCancel">Cancel</FormButton>
              <FormButton size="l" color="alert" @click="handleClickDeleteConfirm">Delete</FormButton>
            </template>
          </ModalDialog>
        </div>
      </template>
    </SuspendStatus>
  </div>
</template>
