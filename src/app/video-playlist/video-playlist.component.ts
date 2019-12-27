import { Component, OnInit, Input } from '@angular/core';
import { IMedia } from './video-playlist.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.scss']
})
export class VideoPlaylistComponent implements OnInit {

  currentIndex = 0;
  @Input() parent: AppComponent;

  playlist: Array<IMedia> = [{
    title: 'Pale Blue Dot',
    src: 'http://static.videogular.com/assets/videos/videogular.mp4',
    type: 'video/mp4',
    thumbnail: '../../assets/thumbnails/Earth-thumbnail.png'
  }, {
    title: 'Big Buck Bunny',
    src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
    type: 'video/mp4',
    thumbnail: '../../assets/thumbnails/Bunny-thumbnail.png'
  }, {
    title: 'Elephants Dream',
    src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
    type: 'video/mp4',
    thumbnail: '../../assets/thumbnails/ElephantDream-thumbnail.png'
  }];

  currentItem: IMedia = this.playlist[this.currentIndex];

  constructor() { }

  ngOnInit() {
    this.onPlaylistClick(this.playlist[this.currentIndex], this.currentIndex);
  }

  onPlaylistClick(playlistItem: IMedia, index: number) {
    this.currentIndex = index;
    this.currentItem = playlistItem;
    if (this.parent) {
      this.parent.invokeVideoRequest(playlistItem);
    }
  }

}
