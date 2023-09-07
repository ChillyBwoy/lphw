import { ref, type Ref } from "vue";

type UseFetchStatus = "loading" | "error" | "success";

type UseFetchCallback<T> = () => Promise<T>;

export function useFetchData<T>(
  callback: UseFetchCallback<T>,
): [() => Promise<void>, Ref<Awaited<T> | undefined>, Ref<UseFetchStatus>];
export function useFetchData<T>(
  callback: UseFetchCallback<T>,
  immediate?: boolean,
): [Ref<Awaited<T> | undefined>, Ref<UseFetchStatus>];
export function useFetchData<T>(callback: UseFetchCallback<T>, immediate?: boolean) {
  const $status = ref<UseFetchStatus>("loading");
  const $data = ref<Awaited<T>>();

  const run = async () => {
    try {
      $status.value = "success";
      $data.value = await callback();
    } catch (error) {
      $status.value = "error";
      throw error;
    }
  };

  if (immediate) {
    run();
    return [$data, $status];
  }

  return [run, $data, $status];
}
