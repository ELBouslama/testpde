import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root',
})
export class CourService {
  public videoParts: Video[];

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
    
    ) {
      var cookies;
      http.get<any>("https://pfa-apde.herokuapp.com/test-vod").subscribe(
        (res) => {
          cookies = res;
          console.log(cookies);
          const keys = Object.keys(cookies);
          for ( let i =0;i < keys.length; i++){
            const key = keys[i];
            console.log(key);console.log(cookies[key])
            this.cookieService.set(key,cookies[key]);
          }
        }
      );



    this.videoParts = [
      new Video(
        [
          {
            src: 'https://d1r0brkdem2ao6.cloudfront.net/39a8951a-dcaa-4457-bd37-d6e5448a10fe/AppleHLS1/01-Intro.m3u8',
            type: 'video',

          },

        ],
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg',
        [
          {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            default: true,
          },
          {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          },
        ],
        'Part 1 of the movie',
        '5:01'
      ),
      new Video(
        [
          {
            src: 'https://mediapde-frct1.streaming.media.azure.net/7fec810a-d338-43c6-aa77-8da9437c2901/02-Interet.ism/manifest(format=m3u8-aapl)',
            type: 'video',

          },

        ],
        'https://store-images.s-microsoft.com/image/apps.3260.13532175964152527.234bf515-7ad5-4cc6-b14b-0fe7095dd66d.95c771b8-5fa4-46f7-838e-ab6ed97f6746?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg',
        [
          {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            default: true,
          },
          {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          },
        ],
        'Part 2 of the movie',
        '4:21'
      ),
      new Video(
        [
          {
            src: 'https://mediapde-frct1.streaming.media.azure.net/7fec810a-d338-43c6-aa77-8da9437c2901/02-Interet.ism/manifest(encryption=cbc)',
            type: 'video',

          },
        ],
        'https://store-images.s-microsoft.com/image/apps.3260.13532175964152527.234bf515-7ad5-4cc6-b14b-0fe7095dd66d.95c771b8-5fa4-46f7-838e-ab6ed97f6746?w=672&h=378&q=80&mode=letterbox&background=%23FFE4E4E4&format=jpg',
        [
          {
            kind: 'captions',
            label: 'English',
            srclang: 'en',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            default: true,
          },
          {
            kind: 'captions',
            label: 'French',
            srclang: 'fr',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
          },
        ],
        'Part 3 of the movie',
        '3:01'
      ),
    ];
  }

  getFakeVideo() : Video[] {
    return this.videoParts ;
  }

  getVideo(): Observable<Video>{
    return this.http.get<Video>('http://localhost:3000/video/media?filename=01-Intro.mp4') ;

  }






}
