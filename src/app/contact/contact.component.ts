import {Component, Input, OnInit} from '@angular/core';
import {IContact} from "../interfaces/iContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;

  localContact!: IContact
  isUpdating: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.localContact = {...this.contact}
    console.log(this.localContact)
  }

  onDelete() {
    // this.onDelete.emit(this.contact)
  }

  onUpdateClick() {
    this.isUpdating = true;
  }

  onSave() {
    this.isUpdating = false;
    this.contact = this.localContact
  }

}
