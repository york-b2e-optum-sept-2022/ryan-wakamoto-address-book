import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact-input',
  templateUrl: './contact-input.component.html',
  styleUrls: ['./contact-input.component.css']
})
export class ContactInputComponent implements OnInit {

  @Input() contact!: IContact;


  // give values, without the equals, it will give undefined

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

  onSave() {
    this.dataService.onSave(this.contact)
    console.log(this.contact)
  }

  onBack() {
    this.dataService.onBack()
    console.log('back clicked')
  }

}
