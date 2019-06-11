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
  streams: Stream[];

  constructor(private http: HttpClient) {
    const converter = new JsonConvert();
    converter.ignorePrimitiveChecks = false;

    const h = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    const data: any = this.http.get('localhost:10001/streams', { headers: h });
    this.streams = converter.deserializeArray(data, Stream);
  }

  getStreamList(): Stream[] {
    return this.streams;
  }
}
