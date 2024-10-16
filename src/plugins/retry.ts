export function retry<T>(
  fn: () => Promise<T>,
  retries: number,
  delayMs = 0
): Promise<T> {
  return fn().catch((err) => {
    if (retries > 0) {
      return new Promise<T>((resolve) =>
        setTimeout(() => resolve(retry(fn, retries - 1, delayMs)), delayMs)
      );
    }
    return Promise.reject(new Error(err));
  });
}
