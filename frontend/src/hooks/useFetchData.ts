import { ApiError, CancelablePromise } from "@/client";
import { ref, type Ref } from "vue";

type UseFetchStatus = "loading" | "error" | "success";

export function useFetchData<T, TError extends ApiError = ApiError>(
  promise: CancelablePromise<T> | Promise<T>,
): [Ref<T | undefined>, Ref<UseFetchStatus>, Ref<TError | undefined>] {
  const $data = ref<T>();
  const $status = ref<UseFetchStatus>("loading");
  const $error = ref<TError>();

  promise
    .then((data) => {
      $data.value = data;
      $status.value = "success";
    })
    .catch((error) => {
      $error.value = error as TError;
      $status.value = "error";
    });

  return [$data, $status, $error];
}
