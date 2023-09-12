<script setup lang="ts">
import { useRoute, RouterLink } from "vue-router";
import PencilSquareIcon from "@heroicons/vue/24/outline/PencilSquareIcon";
import TrashIcon from "@heroicons/vue/24/solid/TrashIcon";
import { routes } from "@/router/routes";
import { useFetchData } from "@/hooks/useFetchData";
import { useApiClient } from "@/hooks/useApiClient";
import SuspendStatus from "@/components/SuspendStatus.vue";
import PageTitle from "@/components/PageTitle.vue";
import FormButton from "@/components/Form/FormButton.vue";
import RobotStatus from "@/components/Robot/RobotStatus.vue";
import RobotBatteryStatus from "@/components/Robot/RobotBatteryStatus.vue";
import IconContainer from "@/components/IconContainer.vue";

const route = useRoute();

const apiClient = useApiClient();
const id = route.params.id as string;

const [$robotData, $robotStatus] = useFetchData(apiClient.robots.show({ id }));
</script>

<style scoped>
.robot-view {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.robot-view__spec {
  flex: 1;
  width: 100%;
  display: grid;
  gap: var(--spacing-2) var(--spacing-3);
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(auto-fill, auto);
}

.robot-view__spec dt {
  display: flex;
  align-items: center;
}

.robot-view__spec dd {
  font-size: var(--font-size-l);
  font-weight: 600;
  display: flex;
  align-items: center;
}

.robot-view__battery {
  padding: var(--spacing-2) 0;
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

        <dl class="robot-view__spec">
          <dt>Model</dt>
          <dd>{{ $robotData.model }}</dd>

          <dt>Software Version</dt>
          <dd>{{ $robotData.software_version }}</dd>

          <dt>Serial Number</dt>
          <dd>{{ $robotData.serial_number }}</dd>

          <dt>IP Address</dt>
          <dd>{{ $robotData.ip_address }}</dd>

          <dt>System Status</dt>
          <dd>
            <RobotStatus :status="$robotData.system_status" />
          </dd>

          <dt>Battery</dt>
          <dd>
            <RobotBatteryStatus
              class="robot-view__battery"
              :health="$robotData.battery_health"
              :remaining="$robotData.remaining_battery"
            />
          </dd>
        </dl>

        <div class="robot-view__actions">
          <RouterLink :to="routes.robotEdit($robotData.id)" custom v-slot="{ navigate }">
            <FormButton size="l" @click="navigate">
              Edit
              <IconContainer>
                <PencilSquareIcon />
              </IconContainer>
            </FormButton>
          </RouterLink>
          <FormButton color="alert" size="l">
            Delete
            <IconContainer>
              <TrashIcon />
            </IconContainer>
          </FormButton>
        </div>
      </template>
    </SuspendStatus>
  </div>
</template>
