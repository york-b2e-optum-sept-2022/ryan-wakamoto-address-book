import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Output() contactToOutput: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() backClicked = new EventEmitter<undefined>();


  // give values, without the equals, it will give undefined
  contact: IContact = {
    id: 0,
    name: '',
    address: '',
    phoneNumber:'',
    email:'',
    birthday:new Date(),
    dateMet: new Date(),
    relation:'',
    company:'',
    notes:'',
    date: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    this.contactToOutput.emit(this.contact)
  }

  onBack() {
    this.backClicked.emit()
    console.log('back clicked')
  }

}
