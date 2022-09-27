import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IContact} from "../interfaces/iContact";
import {IAccount} from "../interfaces/iaccount";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {

  @Input() list!: IContact[];
  @Output() deleteContact = new EventEmitter<any>();
  // @Input() filterPicked!: string;

  displayList!: IContact[];
  searchText: string = ''
  foundText = true;

  constructor() { }

  ngOnInit(): void {
    this.displayList = [...this.list]
  }

  ngOnChanges(changes: SimpleChanges) {
    this.displayList = [...this.list]
  }

  onDelete(contact: IContact){
    this.deleteContact.emit(contact)
  }

  searchInput(searchText: string) {
    this.searchText = searchText
    this.displayList = this.list.filter((contact) => {
      return contact.name.includes(searchText);
    })
  }
}
