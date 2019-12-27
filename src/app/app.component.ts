import { Component } from '@angular/core';
import { IMedia } from './video-playlist/video-playlist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-video-streamer';
  currentPlaylistItem: IMedia;

  invokeVideoRequest(currentSeekItem: IMedia) {
    this.currentPlaylistItem = currentSeekItem;
  }

}
