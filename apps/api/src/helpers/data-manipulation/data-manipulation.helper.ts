export const returnJson = <T>(payload: T): string => {
  return JSON.stringify(payload, null, 2)
}
