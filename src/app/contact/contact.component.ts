import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() deleteClicked = new EventEmitter<IContact>();

  isUpdating: boolean = false;
  wasUpdated: boolean = false;
  localContact!: IContact;

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
    this.localContact = {...this.contact}
  }

  onDelete() {
    this.deleteClicked.emit(this.contact)
  }

  onUpdateClick() {
    this.isUpdating = true;

  }

  onSave() {
    this.isUpdating = false;
    this.wasUpdated = true;
    this.localContact = {...this.contact}
    console.log(this.localContact)
  }

  onCancel() {
    this.isUpdating = false;
    this.contact = {...this.localContact}
    console.log(this.contact)
  }
}
