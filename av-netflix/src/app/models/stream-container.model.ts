import {
    JsonObject,
    JsonProperty,
    JsonCustomConvert,
    JsonConverter
} from 'json2typescript';
import { Stream } from './stream.model';

@JsonObject('StreamContainer')
export class StreamContainer {
    @JsonProperty('stream', [Stream], true)
    streams: Stream[] = undefined;

    getStreams(): Stream[] {
        return this.streams;
    }
}
