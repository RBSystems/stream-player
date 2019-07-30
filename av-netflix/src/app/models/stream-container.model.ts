import {
    JsonObject,
    JsonProperty
} from 'json2typescript';
import { Stream } from './stream.model';

@JsonObject('StreamContainer')
export class StreamContainer {
    @JsonProperty('stream', [Stream], true)
    streams: Stream[];

    getStreams(): Stream[] {
        return this.streams;
    }
}
