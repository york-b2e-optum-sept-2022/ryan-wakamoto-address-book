import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IContact} from "../interfaces/iContact";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() filterPicked = new EventEmitter<string>();
  @Output() searchClicked = new EventEmitter<any>();

  searchInput: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(input: string){
    // console.log(input)
    this.searchClicked.emit(input)

    }

  onFilterChange(event: any){
    // console.log(event.target.value)
    this.filterPicked.emit(event.target.value)
  }



}
