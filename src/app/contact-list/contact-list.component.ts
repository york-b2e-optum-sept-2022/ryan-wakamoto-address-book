import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";
import {IAccount} from "../interfaces/iaccount";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contactList!: IContact[];
  @Output() onCreateList = new EventEmitter<boolean>;
  @Output() onBackClicked = new EventEmitter<boolean>;

  clickedCreate: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

// gets rid of create button to replace with Back Button
  onCreate(event: any) {
    this.onCreateList.emit(
      this.clickedCreate = false
    )
  }

  // gets rid of Back button to replace with Create Button
  onBackClick(){
    this.onBackClicked.emit(
      this.clickedCreate = true
    )
  }
}
