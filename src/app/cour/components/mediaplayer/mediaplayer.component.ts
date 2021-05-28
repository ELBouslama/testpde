import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

import { PlyrComponent } from 'ngx-plyr';
import * as Plyr from 'plyr';
import { Video } from '../../model/video';
import { HlsjsPlyrDriver } from './hljs-plyr-driver/hljs-plyr-driver';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrls: ['./mediaplayer.component.css'],
})
export class MediaplayerComponent implements OnInit, OnChanges {
  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;

  player: Plyr;
  plyr2: Plyr;

  options: Plyr.Options = {
  captions: { active: true, update: true, language: 'en' },
  };

  hlsjsDriver2 = new HlsjsPlyrDriver(false);

  @Input()
  currentVideo: Video;

  @Input()
  indexVideo: number;

  @Output()
  incrementInedxOnVideoEnd = new EventEmitter();

  videoSources: Plyr.Source[];
  poster: string;
  tracks: any[];

  languageChanged(driver: HlsjsPlyrDriver, plyr: Plyr) {
    setTimeout(() => driver.hls.subtitleTrack = plyr.currentTrack, 50);
  }

  played() {
    this.hlsjsDriver2.load(this.videoSources[0].src);
  }

 /*  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  } */

  Ended(event: Plyr.PlyrEvent) {
    console.log('Ended ', event);
    this.indexVideo += 1;
    this.incrementInedxOnVideoEnd.emit('next video');
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

  constructor() {}

  ngOnInit() {
    this.videoSources = this.currentVideo.videoSources;
    this.poster = this.currentVideo.poster;
    this.tracks = this.currentVideo.tracks;
  }

  ngOnChanges() {
    this.videoSources = this.currentVideo.videoSources;
    this.poster = this.currentVideo.poster;
    this.tracks = this.currentVideo.tracks;
  }
}
