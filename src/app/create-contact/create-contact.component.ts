import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  @Output() createClicked = new EventEmitter<undefined>();

  constructor() { }

  ngOnInit(): void {
  }

  createClick() {
    this.createClicked.emit()
    console.log('button clicked')
  }
}
