import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgBufferingModule } from 'videogular2/compiled/buffering';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlayerComponent,
    VideoPlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
