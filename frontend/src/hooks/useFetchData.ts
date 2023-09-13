import { ApiError, CancelablePromise } from "@/client";
import { ref, type Ref } from "vue";

type UseFetchDataStatus = "loading" | "error" | "success";

type UseFetchDataReturn<T, TError> = [Ref<T | undefined>, Ref<UseFetchDataStatus>, Ref<TError | undefined>];

/**
 * A custom hook that fetches data from a promise and returns reactive refs for the data, status, and error.
 * @template T The type of the data being fetched.
 * @template TError The type of the error that can be thrown.
 * @param {CancelablePromise<T> | Promise<T>} promise The promise to fetch data from.
 * @returns {UseFetchDataReturn<T, TError>} A tuple of reactive refs for the data, status, and error.
 */
export function useFetchData<T, TError extends ApiError = ApiError>(
  promise: CancelablePromise<T> | Promise<T>,
): UseFetchDataReturn<T, TError> {
  const $data = ref<T>();
  const $status = ref<UseFetchDataStatus>("loading");
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
