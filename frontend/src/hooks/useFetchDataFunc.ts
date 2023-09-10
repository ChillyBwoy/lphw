import { ref, type Ref } from "vue";

type UseFetchFuncStatus = "loading" | "error" | "success";

type UseFetchCallback<T> = () => Promise<T>;

export function useFetchDataFunc<T>(
  callback: UseFetchCallback<T>,
): [() => Promise<void>, Ref<T | undefined>, Ref<UseFetchFuncStatus>, Ref<Error | null>] {
  const $status = ref<UseFetchFuncStatus>("loading");
  const $error = ref<Error | null>(null);
  const $data = ref<T>();

  const run = async () => {
    $status.value = "loading";
    $data.value = undefined;
    $error.value = null;

    try {
      $data.value = await callback();
      $status.value = "success";
    } catch (error) {
      $error.value = error as Error;
      $status.value = "error";
    }
  };

  return [run, $data, $status, $error];
}
