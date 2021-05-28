

export class Video {

  constructor(
    public videoSources: any[] = [],
    public poster: string = '',
    public tracks: any[] = [],
    public title: string = '',
    public duration: string = ''
  ) {
    this.videoSources = videoSources;
    this.duration = duration;
    this.tracks = tracks;
    this.title = title;
    this.poster = poster;
  }
}
