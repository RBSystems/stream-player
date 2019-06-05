import { Deserializable } from "./deserializable.model";

export class Stream implements Deserializable {
  name: string;
  address: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
