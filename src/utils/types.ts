export type LiteralUnion<T, U = string> = T | (U & Record<never, never>);
export type Tuple<T, S extends number> = T[] & { length: S };
