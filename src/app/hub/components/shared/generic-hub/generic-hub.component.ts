import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-hub',
  templateUrl: './generic-hub.component.html',
  styleUrls: ['./generic-hub.component.css']
})
export class GenericHubComponent implements OnInit {

  @Input() header = "Welcome to our forum";
  @Input() span = "Feel free to choose topic you're interested in.";
  @Input() icon = "fa fa-globe text-navy mid-icon";
  @Input() isDiscussion = false;
  @Input() discussion_id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
