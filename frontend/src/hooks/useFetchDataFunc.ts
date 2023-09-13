import type { ApiError } from "@/client";
import { ref, type Ref } from "vue";

type UseFetchFuncStatus = "idle" | "loading" | "error" | "success";

type UseFetchFuncCallback<T, TPayload> = (payload: TPayload) => Promise<T>;

type UseFetchFuncReturn<T, TPayload, TError> = [
  (payload: TPayload) => Promise<void>,
  Ref<T | undefined>,
  Ref<UseFetchFuncStatus>,
  Ref<TError | undefined>,
];

/**
 * A custom hook that takes a callback function and returns a tuple containing a function to execute the callback,
 * a reactive ref to store the returned data, a reactive ref to store the status of the function (idle, loading, error, success),
 * and a reactive ref to store any errors that occur during execution.
 *
 * @template T The type of the data returned by the callback function.
 * @template TPayload The type of the payload passed to the callback function.
 * @template TError The type of the error that can be thrown by the callback function.
 * @param {UseFetchFuncCallback<T, TPayload>} callback The callback function to execute.
 * @returns {UseFetchFuncReturn<T, TPayload, TError>} A tuple containing the run function, the data ref, the status ref, and the error ref.
 */
export function useFetchDataFunc<T, TPayload, TError extends ApiError = ApiError>(
  callback: UseFetchFuncCallback<T, TPayload>,
): UseFetchFuncReturn<T, TPayload, TError> {
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
