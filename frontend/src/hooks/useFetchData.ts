import { CancelablePromise } from "@/client";
import { ref, type Ref } from "vue";

type UseFetchStatus = "loading" | "error" | "success";

export function useFetchData<T>(
  promise: CancelablePromise<T> | Promise<T>,
): [Ref<T | undefined>, Ref<UseFetchStatus>, Ref<Error | null>] {
  const $status = ref<UseFetchStatus>("loading");
  const $error = ref<Error | null>(null);
  const $data = ref<T | undefined>();

  promise
    .then((data) => {
      $data.value = data;
      $status.value = "success";
    })
    .catch((error: Error) => {
      $error.value = error;
      $status.value = "error";
    });

  return [$data, $status, $error];
}
