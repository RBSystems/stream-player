import { Injectable } from "@angular/core";

import streamData from "src/assets/streams.json";
import { StreamContainer } from "src/app/models/stream-container.model.js";
import { Stream } from "src/app/models/stream.model";

@Injectable({
  providedIn: "root"
})
export class StreamListService {
  streams: StreamContainer;

  constructor() {
    this.streams = new StreamContainer().deserialize(streamData);
  }

  getStreamList(): Stream[] {
    return this.streams.getAllStreams();
  }
}
