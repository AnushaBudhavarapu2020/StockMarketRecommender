interface Reducer<T> {
    (state: T, action: Action): T;
  }