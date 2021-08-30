export class Attributes<T> {
  constructor(private data: T) {}

  //T --> UserProps K--> name, age,id keyof checks whether age, id or number is a part of UserProps
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
