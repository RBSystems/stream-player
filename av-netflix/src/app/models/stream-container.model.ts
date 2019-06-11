import { Stream } from './stream.model';

export class StreamContainer {
  streams: Stream[];

  getAllStreams(): Stream[] {
    return this.streams;
  }
}
