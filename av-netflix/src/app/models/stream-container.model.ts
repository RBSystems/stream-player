import {
  JsonObject,
  JsonProperty,
  JsonCustomConvert,
  JsonConverter
} from 'json2typescript';

import { Stream } from './stream.model';

@JsonObject('StreamContainer')
export class StreamContainer {
  @JsonProperty('streams', [Stream], true)
  streams: Stream[];

  getAllStreams(): Stream[] {
    return this.streams;
  }
}
