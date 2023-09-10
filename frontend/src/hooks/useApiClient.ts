import { inject } from "vue";
import { apiClientInjectKey } from "@/constants/injection";

export function useApiClient() {
  return inject(apiClientInjectKey)!;
}
