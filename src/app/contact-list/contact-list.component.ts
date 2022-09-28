import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IContact} from "../interfaces/iContact";
import {IAccount} from "../interfaces/iaccount";
import {DataService} from "../data.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {

  list!: IContact[];

  displayList!: IContact[];
  searchText: string = ''

  constructor(private dataService: DataService) {
    this.list = this.dataService.getContactList()
    this.dataService.$contactList.subscribe((contactList) => {
      this.list = contactList;
      this.displayList = [...this.list]
      }

    )
  }

  ngOnInit(): void {
    this.displayList = [...this.list]
  }

  ngOnChanges(changes: SimpleChanges) {
    this.displayList = [...this.list]
  }

  searchInput(searchText: string) {
    this.searchText = searchText
    this.displayList = this.list.filter((contact) => {
      return contact.name.includes(searchText);
    })
  }
}
