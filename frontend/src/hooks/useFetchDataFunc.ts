import type { ApiError } from "@/client";
import { ref, type Ref } from "vue";

type UseFetchFuncStatus = "idle" | "loading" | "error" | "success";

type UseFetchCallback<T, TPayload> = (payload: TPayload) => Promise<T>;

export function useFetchDataFunc<T, TPayload, TError extends ApiError = ApiError>(
  callback: UseFetchCallback<T, TPayload>,
): [(payload: TPayload) => Promise<void>, Ref<T | undefined>, Ref<UseFetchFuncStatus>, Ref<TError | undefined>] {
  const $data = ref<T>();
  const $status = ref<UseFetchFuncStatus>("idle");
  const $error = ref<TError>();

  const run = async (payload: TPayload) => {
    $status.value = "loading";
    $data.value = undefined;
    $error.value = undefined;

    try {
      $data.value = await callback(payload);
      $status.value = "success";
    } catch (error) {
      $error.value = error as TError;
      $status.value = "error";
    }
  };

  return [run, $data, $status, $error];
}
