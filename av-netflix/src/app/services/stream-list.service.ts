import { Injectable } from '@angular/core';

import { Stream } from 'src/app/models/stream.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { StreamContainer } from '../models/stream-container.model';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {
  // streams: Stream[];
  converter: JsonConvert;
  streams: StreamContainer;
  h = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) {
    this.converter = new JsonConvert();
    this.converter.ignorePrimitiveChecks = false;

    // const data: any = this.http.get('localhost:10001/streams', { headers: this.h }).toPromise();
    // // this.streams = converter.deserializeArray(data, Stream);
    // this.streams = converter.deserializeObject(data, StreamContainer);
    // console.log(this.streams);
  }

  // getStreamList(): Stream[] {
  //   console.log("getting stream list");
  //   return this.streams.getStreams();
  //   // return this.streams;
  // }

  // getStreamList(): Stream[] {
  //   return this.streams;
  // }

  public async getLicenseKey() {
    try {
      const key = this.http.get('licensekey', { headers: this.h }).toPromise();

      return key;
    } catch (e) {
      throw new Error('failed to get license key: ' + e);
    }
  }

  public async getStreamList() {
    try {
      const data = this.http.get('streams', { headers: this.h}).toPromise();

      this.streams = this.converter.deserializeObject(data, StreamContainer);

      return this.streams;
    } catch (e) {
      throw new Error('failed to get stream list: ' + e);
    }
  }
}
