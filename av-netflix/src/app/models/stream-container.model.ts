import {
    JsonObject,
    JsonProperty,
    JsonCustomConvert,
    JsonConverter
} from 'json2typescript';
import { Stream } from './stream.model';

@JsonObject('StreamContainer')
export class StreamContainer {
    @JsonProperty('list', [Stream], true)
    list: Stream[] = undefined;

    getStreams(): Stream[] {
        return this.list;
    }
}