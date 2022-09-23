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
  @Output() deleteContact = new EventEmitter<any>();

  localContact!: IContact[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.contactList)
  }

  onDelete(contact: IContact){
    this.deleteContact.emit(contact)
  }
}
