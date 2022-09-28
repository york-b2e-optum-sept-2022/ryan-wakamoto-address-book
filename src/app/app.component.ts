import { Component } from '@angular/core';
import {IAccount} from "./interfaces/iaccount";
import {IContact} from "./interfaces/iContact";
import { v4 as uuidv4 } from 'uuid';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'address-book';

  createContact: boolean = false;
  isLoggedIn: boolean = true;
  selectedContact!: IContact;

  accountList: IAccount[] = [
    {username: 'admin', password: 'admin'}
  ]

  constructor(private dataService: DataService) {
    this.dataService.$createContact.subscribe(
      (createContact ) => {
        this.createContact = createContact;
      }
    )
    this.dataService.$selectedContact.subscribe(
      (selectedContact ) => {
        this.selectedContact = selectedContact;
      }
    )
  }


  contactFound: boolean = false;

  onLogin(loginCreds: IAccount) {
    const foundAccount = this.accountList.find((account) => {
      return account.username === loginCreds.username &&
        account.password === loginCreds.password
    })

    if (foundAccount === undefined) {
      console.log('invalid login')
      alert('Invalid Login')
      return;
    }
    this.isLoggedIn = true;
    this.contactFound = false;
  }


}
