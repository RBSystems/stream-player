import { Component, OnInit, Input } from '@angular/core';

declare var WowzaPlayer: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() playerID: string;
  @Input() currURL: string;
  player: any;

  constructor() { }

  ngOnInit() {
    this.player = WowzaPlayer.create(('player' + this.playerID),
            {
                license: 'PLAY1-aVtUF-HfXt6-EVa8K-u3v3Q-8ZKEN',
                title: '',
                description: '',
                sourceURL: this.currURL,
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
/*
			this.URLIndex = 0;
			function cycleStream(){
				this.URLIndex = (this.URLIndex + 1) % 3;
				if (this.URLIndex == 0){
					this.currURL = "https%3A%2F%2Fturtle1.byu.edu%3A8443%2Foverflow%2FOffice_Camera.stream%2Fplaylist.m3u8";
				}
				else if (this.URLIndex == 1){
					this.currURL = "https%3A%2F%2Fturtle1.byu.edu%3A8443%2Foverflow%2Fteradeck_unicast.stream%2Fplaylist.m3u8";
				}
				else if (this.URLIndex == 2){
					this.currURL = "https%3A%2F%2Fturtle1.byu.edu%3A8443%2Foverflow%2F1108_Encoder.stream%2Fplaylist.m3u8";
				}
				console.log(this.currURL);
			}
			function reload(){
				cycleStream();
				WowzaPlayer.create('playerElement',
				{
					"license":"PLAY1-aVtUF-HfXt6-EVa8K-u3v3Q-8ZKEN",
					"title":"BLAH",
					"description":"BLAH",
					"sourceURL":this.currURL,
					"autoPlay":false ,
					"volume":"75",
					"mute":false,
					"loop":false,
					"audioOnly":false,
					"uiShowQuickRewind":true,
					"uiQuickRewindSeconds":"30"
				}
				);
				console.log("Refreshed");
			}
		</script>
*/
}
