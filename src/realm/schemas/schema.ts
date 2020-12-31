export type Schema<T> = {
  name: string;
  primaryKey?: string;
  properties: T;
};
