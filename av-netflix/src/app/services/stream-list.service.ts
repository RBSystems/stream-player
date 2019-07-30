import { Injectable } from '@angular/core';

import { Stream } from 'src/app/models/stream.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonConvert } from 'json2typescript';
import { StreamContainer } from '../models/stream-container.model';

@Injectable({
  providedIn: 'root'
})
export class StreamListService {
  streams: Stream[];
  converter: JsonConvert;
  // streams: StreamContainer;
  h = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) {
    this.converter = new JsonConvert();
    this.converter.ignorePrimitiveChecks = false;
  }

  public async getLicenseKey() {
    try {
      const key: any = this.http.get('licensekey', { headers: this.h }).toPromise();

      return key;
    } catch (e) {
      throw new Error('failed to get license key: ' + e);
    }
  }

  public async getStreamList() {
    try {
      const data: any = await this.http.get('streams', { headers: this.h}).toPromise();

      console.log("data is", data);
      this.streams = this.converter.deserializeArray(data, Stream);

      console.log('streams is', this.streams);
      return this.streams;
    } catch (e) {
      throw new Error('failed to get stream list: ' + e);
    }
  }
}
