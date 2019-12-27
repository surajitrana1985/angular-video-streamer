import { Component, OnInit, Input } from '@angular/core';
import { IMedia } from '../video-playlist/video-playlist.model';
import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() currentPlayedItem: IMedia;

  videoAPI: VgAPI;

  constructor() { }

  ngOnInit() { }

  onPlayerReady(vgAPI: VgAPI) {
    this.videoAPI = vgAPI;
    this.videoAPI.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.startVideoPlay.bind(this));
  }

  startVideoPlay() {
    this.videoAPI.play();
  }

}
