import { Injectable } from '@angular/core';

import { Stream } from 'src/app/models/stream.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { StreamContainer } from '../models/stream-container.model';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {
  //streams: Stream[];
  streams: StreamContainer;

  constructor(private http: HttpClient) {
    const converter = new JsonConvert();
    converter.ignorePrimitiveChecks = false;

    const h = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const data: any = this.http.get('localhost:10001/streams', { headers: h });
    // this.streams = converter.deserializeArray(data, Stream);
    this.streams = converter.deserializeObject(data, StreamContainer);
  }

  getStreamList(): Stream[] {
    return this.streams.getStreams();
  }

  // getStreamList(): Stream[] {
  //   return this.streams;
  // }
}
