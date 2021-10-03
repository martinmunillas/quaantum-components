export const filterUndefined = <T extends Record<string, any>>(obj: T): T => {
  const final: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      final[key] = value;
    }
  }
  return final as T;
};
