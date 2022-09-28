import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  createClick() {
    this.dataService.createClicked()
    console.log(this.dataService)
  }


}
