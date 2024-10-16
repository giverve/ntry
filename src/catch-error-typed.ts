export function catchErrorTyped<T, E extends new (message?: string) => Error>(
  promise: Promise<T>,
  errorToCatch?: E[]
): Promise<[undefined, T] | [InstanceType<E>]> {
  return promise
    .then((data) => [undefined, data] as [undefined, T])
    .catch((err) => {
      if (errorToCatch === undefined) {
        return [err];
      }

      if (errorToCatch.some((e) => err instanceof e)) {
        return [err];
      }

      throw err;
    });
}
