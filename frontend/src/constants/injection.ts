import type { ApiClient } from "@/client";
import type { InjectionKey } from "vue";

export const apiClientInjectKey = Symbol() as InjectionKey<ApiClient>;
