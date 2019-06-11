import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

declare var WowzaPlayer: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() playerID: string;
  @Input() streamURL: string;
  player: any;

  constructor() { }

  ngOnInit() {
    this.player = WowzaPlayer.create(('player' + this.playerID),
      {
        license: environment.licenseKey,
        title: '',
        description: '',
        sourceURL: this.streamURL,
        autoPlay: false,
        volume: '75',
        mute: false,
        loop: false,
        audioOnly: false,
        uiShowQuickRewind: true,
        uiQuickRewindSeconds: '30'
      }
    );
  }
}
