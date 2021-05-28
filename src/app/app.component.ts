import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'APDE';
  showHeadFooter: boolean = false;

  constructor(public router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/signin' || event['url'] == '/signup') {
          this.showHeadFooter = false;
        } else {
          // console.log("NU")
          this.showHeadFooter = true;
        }
      }
    });
  }
}
