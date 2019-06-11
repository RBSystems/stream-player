import { Deserializable } from './deserializable.model';
import {
  JsonObject,
  JsonProperty,
  JsonCustomConvert,
  JsonConverter
} from 'json2typescript';

@JsonObject('Stream')
export class Stream {
  @JsonProperty('name', String, true)
  name: string = undefined;

  @JsonProperty('address', String, true)
  address: string = undefined;
}
