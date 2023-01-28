export interface ActionWithGeneric<T> {
  type: string;
  payload: T;
}
