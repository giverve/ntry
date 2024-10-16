export function makeCancelable<T>(promise: Promise<T>) {
  let hasCanceled = false;

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      (value) =>
        hasCanceled
          ? reject(new Error("Promise was canceled"))
          : resolve(value),
      (error) =>
        hasCanceled
          ? reject(new Error("Promise was canceled"))
          : reject(
              new Error(error instanceof Error ? error.message : String(error))
            )
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
}
