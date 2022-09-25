import { Component } from '@angular/core';
import {IAccount} from "./interfaces/iaccount";
import {IContact} from "./interfaces/iContact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'address-book';

  createContact: boolean = false;
  isLoggedIn: boolean = true;

  accountList: IAccount[] = [
    {username: 'admin', password: 'admin'}
  ]


  searchText: string = ''
  contactList: IContact[] = [
    {
      id: 0,
      name: 'Ryan',
      address: '123 main st',
      birthday: new Date(),
      dateMet: new Date(),
      company: 'york',
      email: 'rw@gmail.com',
      notes: 'cool person',
      phoneNumber: '310-123-4567',
      relation: 'co-worker',
      date: new Date()
    },
    {
      id: 1,
      name: 'David',
      address: '123 main st',
      birthday: new Date(),
      dateMet: new Date(),
      company: 'york',
      email: 'rw@gmail.com',
      notes: 'cool person',
      phoneNumber: '310-123-4567',
      relation: 'co-worker',
      date: new Date()
    }
  ]
  localContact = this.contactList
  contactFound: boolean = false;
  filterPicked: string = ''

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

  createClicked(event: any) {
    this.createContact = true
  }

  onBack(event: any) {
    this.createContact = false
  }

  onSave(input: any) {
    const currentDate = new Date();
    const contact: IContact = {
      id: currentDate.getTime(),
      name: input.name,
      address: input.address,
      phoneNumber: input.phoneNumber,
      email: input.email,
      birthday: input.birthday,
      dateMet: input.dateMet,
      relation: input.relation,
      company: input.company,
      notes: input.notes,
      date: input.date,
    }
    this.contactList.push(contact)
  }

  onDelete(contactToDelete: IContact) {
    // console.log(contactToDelete)
    console.log(this.contactList)
    this.contactList = this.contactList.filter(contact => contact.id !== contactToDelete.id)
    // console.log(this.contactList)
    this.localContact = this.contactList
  }

  searchInput(event: any) {
    this.searchText = event
    if (event !== ''){
      this.contactList = this.localContact.filter(contact => contact.name.toLowerCase() === event)
    } else if (event === '')
      this.contactList = this.localContact
  }
}
