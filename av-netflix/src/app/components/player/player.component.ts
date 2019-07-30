import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StreamListService } from 'src/app/services/stream-list.service';

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

  constructor(private sl: StreamListService) { }

  ngOnInit() {
    let k: string;
    this.sl.getLicenseKey().then((key) => {
      k = key as string;
      console.log('k is', k);
      this.player = WowzaPlayer.create(('player' + this.playerID),
        {
          license: k,
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
    });
  }
}
