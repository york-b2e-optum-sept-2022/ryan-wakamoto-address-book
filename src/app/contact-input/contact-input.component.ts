import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Input() contact!: IContact;
  @Output() contactToOutput: EventEmitter<IContact> = new EventEmitter<IContact>();
  @Output() backClicked = new EventEmitter<undefined>();


  // give values, without the equals, it will give undefined

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
  }

  onSave() {
    this.contactToOutput.emit(this.contact)
    console.log(this.contact)
  }

  onBack() {
    this.backClicked.emit()
    console.log('back clicked')
  }

}
