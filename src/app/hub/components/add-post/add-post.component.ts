import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { PostService } from "../../services/post.service";


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  richTextForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private postService: PostService
    ) {}

  ngOnInit() {
    this.richTextForm = this._fb.group({
      title: ["Hello, I am Trung", Validators.required],
      description: [
        `<h2><u>This is </u>a <span style=\"color: rgb(240, 102, 102);\">RICH</span> <strong>text editor</strong> <em>for</em> - <a href=\"http://jira.trungk18.com/\" rel=\"noopener noreferrer\" target=\"_blank\">http://jira.trungk18.com/</a></h2><h3><span style=\"color: rgb(153, 51, 255);\">I hope you </span><strong style=\"color: rgb(153, 51, 255);\">like it!</strong></h3>`
      ]
    });
  }
  get descriptionRichControl() {
    return this.richTextForm.controls.description as FormControl;
  }

  Onsubmit(){
    //console.log(JSON.stringify(this.richTextForm.value) );
    let submitForm = this.richTextForm.value;
    submitForm.user_id = "608d24c1c0094844fcb1639e";
    submitForm.discussion_id = "60a673e1a86ff03fb2cfdfe2";
    submitForm = JSON.stringify(submitForm);
    this.postService.addPost(this.richTextForm.value).subscribe(
      (res) => console.log(res)
    )
  }

}
