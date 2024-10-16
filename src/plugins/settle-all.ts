export function settleAll<T>(promises: Promise<T>[]): Promise<Result<T>[]> {
  return Promise.allSettled(promises).then((results) =>
    results.map((result) =>
      result.status === "fulfilled"
        ? { success: true, data: result.value }
        : { success: false, error: result.reason }
    )
  );
}

export type Result<T, E extends Error = Error> =
  | { success: true; data: T }
  | { success: false; error: E };
