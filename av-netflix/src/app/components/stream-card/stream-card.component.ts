import { Component, OnInit, Input } from '@angular/core';
import { Stream } from 'src/app/models/stream.model';

@Component({
  selector: 'app-stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent implements OnInit {
  @Input() playerID: string;
  @Input() streamInfo: Stream;

  constructor() {}

  ngOnInit() {}
}
