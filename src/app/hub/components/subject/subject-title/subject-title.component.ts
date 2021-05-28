import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-title',
  templateUrl: './subject-title.component.html',
  styleUrls: ['./subject-title.component.css', '../../liste/liste.component.css']
})
export class SubjectTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
