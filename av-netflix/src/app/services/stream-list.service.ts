import { Injectable } from '@angular/core';

import streamData from 'src/assets/streams.json';
import { StreamContainer } from 'src/app/models/stream-container.model.js';
import { Stream } from 'src/app/models/stream.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {
  streamContainer: StreamContainer;

  constructor(private http: HttpClient) {
    const converter = new JsonConvert();
    converter.ignorePrimitiveChecks = false;

    const h = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    try {
      const data: any = this.http.get('localhost:10001/streams', { headers: h });
      this.streamContainer = converter.deserializeObject(data, StreamContainer);
      console.log('Container:', this.streamContainer);
      console.log('Streams:', this.streamContainer.getAllStreams());
    } catch (e) {
      console.log(e);
    }
  }

  getStreamList(): Stream[] {
    return this.streamContainer.getAllStreams();
  }
}
