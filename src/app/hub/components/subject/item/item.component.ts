import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/components/classes/item';
import { ItemService } from 'src/app/hub/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css', '../../liste/liste.component.css']
})
export class ItemComponent implements OnInit {

  @Input() subjectID: string;
  items: Item[]

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItemsBySubjectID(this.subjectID).subscribe(
      (res) => {
        this.items = res;
      }
    )
  }

}
