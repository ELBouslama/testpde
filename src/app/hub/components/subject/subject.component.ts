import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/components/classes/subject';
import { SubjectService } from 'src/app/hub/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css', '../liste/liste.component.css']
})
export class SubjectComponent implements OnInit {
  
  subjects: Subject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      (res) => {
        this.subjects = res;
      } 
    );
  }
}
