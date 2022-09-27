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
    this.dataService.contactList
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

  createClicked() {
    this.createContact = true
    this.selectedContact = {
      id: "",
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
      birthday: new Date(),
      dateMet: new Date(),
      relation: "",
      company: "",
      notes: "",
      date: new Date(),
    }
  }

  onBack(event: any) {
    this.createContact = false
  }

  onSave(contact: IContact){
    if (contact.id === "") {
      this.addContact(contact);
    }
    this.createContact = false;
  }

  addContact(contact: IContact) {
    contact.id = uuidv4();
    this.dataService.contactList.push(contact);
    console.log(this.contactList)
  }

  onDelete(contactToDelete: IContact) {
    this.dataService.contactList = this.dataService.contactList.filter(contact => contact.id !== contactToDelete.id)
  }

}
