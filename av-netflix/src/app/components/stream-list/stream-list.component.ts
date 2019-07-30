import { Component, OnInit } from '@angular/core';

import { StreamListService } from 'src/app/services/stream-list.service';
import { Stream } from 'src/app/models/stream.model';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.scss']
})
export class StreamListComponent implements OnInit {
  streamList: Stream[] = [];

  constructor(private listService: StreamListService) {}

  ngOnInit() {
    this.listService.getStreamList().then((list) => {
      console.log(list);
      this.streamList = list;
    });
  }
}
