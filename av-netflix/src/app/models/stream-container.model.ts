import { Deserializable } from "./deserializable.model";
import { Stream } from "./stream.model";

export class StreamContainer implements Deserializable {
  streams: Stream[];

  deserialize(input: any): this {
    Object.assign(this, input);

    this.streams = input.streams.map(stream =>
      new Stream().deserialize(stream)
    );

    return this;
  }

  getAllStreams(): Stream[] {
    return this.streams;
  }
}
