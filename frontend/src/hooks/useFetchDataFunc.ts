import { ref, type Ref } from "vue";

type UseFetchFuncStatus = "loading" | "error" | "success";

type UseFetchCallback<T, TPayload> = (payload: TPayload) => Promise<T>;

export function useFetchDataFunc<T, TPayload>(
  callback: UseFetchCallback<T, TPayload>,
): [(payload: TPayload) => Promise<void>, Ref<T | undefined>, Ref<UseFetchFuncStatus>, Ref<Error | null>] {
  const $status = ref<UseFetchFuncStatus>("loading");
  const $error = ref<Error | null>(null);
  const $data = ref<T>();

  const run = async (payload: TPayload) => {
    $status.value = "loading";
    $data.value = undefined;
    $error.value = null;

    try {
      $data.value = await callback(payload);
      $status.value = "success";
    } catch (error) {
      $error.value = error as Error;
      $status.value = "error";
    }
  };

  return [run, $data, $status, $error];
}
