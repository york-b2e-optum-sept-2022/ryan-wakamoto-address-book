import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterPicked = new EventEmitter<string>();
  @Output() searchInput = new EventEmitter<any>();

  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(searchText: string){
    this.searchInput.emit(searchText)
  }

  onFilterChange(event: any){
    // console.log(event.target.value)
    this.filterPicked.emit(event.target.value)
  }



}
