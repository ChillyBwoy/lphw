import { CancelablePromise } from "@/client";
import { ref, type Ref } from "vue";

type UseFetchStatus = "loading" | "error" | "success";

type UseFetchCallback<T> = () => Promise<T>;

export function useFetchData<T>(callback: UseFetchCallback<T>): [() => Promise<void>, Ref<T>, Ref<UseFetchStatus>, Ref<Error | null>];
export function useFetchData<T>(promise: Promise<T>): [Ref<T>, Ref<UseFetchStatus>, Ref<Error | null>];
export function useFetchData<T>(cancelablePromise: CancelablePromise<T>): [Ref<T>, Ref<UseFetchStatus>, Ref<Error | null>];
export function useFetchData<T>(callbackOrPromise: UseFetchCallback<T> | Promise<T>) {
  const $status = ref<UseFetchStatus>("loading");
  const $error = ref<Error | null>(null);
  const $data = ref<T>();

  if (callbackOrPromise instanceof Promise || callbackOrPromise instanceof CancelablePromise) {
    callbackOrPromise
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

  const run = async () => {
    try {
      $data.value = await callbackOrPromise();
      $status.value = "success";
    } catch (error) {
      $error.value = error as Error;
      $status.value = "error";
    }
  };

  return [run, $data, $status, $error];
}
