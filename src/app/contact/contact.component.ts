import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact!: IContact;

  isUpdating: boolean = false;
  wasUpdated: boolean = false;
  localContact!: IContact;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onDelete() {
    this.dataService.onDelete(this.contact)
    console.log(this.contact)
  }

  onUpdateClick() {
    this.dataService.setSelectedContact(this.contact.id);
    // this.localContact = {...this.contact};
    this.isUpdating = true;
  }

  onSaveUpdate() {
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
