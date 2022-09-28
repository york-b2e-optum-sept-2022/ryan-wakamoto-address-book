import { Injectable } from '@angular/core';
import {IContact} from "./interfaces/iContact";
import {v4 as uuidv4} from "uuid";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private selectedContact!: IContact;
  $selectedContact = new Subject<IContact>();

  private createContact: boolean = false;
  $createContact = new Subject<true | false>();

  private contactList: IContact[];
  $contactList = new Subject<IContact[]>();
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
    this.$createContact.next(this.createContact)
    this.$selectedContact.next(this.selectedContact)
  }



  constructor() {
    this.contactList = [
      {
        id: '123',
        name: 'contact 1',
        address: '123 main st',
        birthday: new Date(),
        dateMet: new Date(),
        company: 'york solutions',
        email: 'contact@yorksolutions.net',
        notes: 'cool person!',
        phoneNumber: '555-555-5555',
        relation: 'co-worker',
        date: new Date()
      },
      {
        id: '321',
        name: 'contact 2',
        address: '123 main st',
        birthday: new Date(),
        dateMet: new Date(),
        company: 'york solutions',
        email: 'contact@yorksolutions.net',
        notes: 'cool person!',
        phoneNumber: '555-555-5555',
        relation: 'co-worker',
        date: new Date()
      },
    ]
  }

  // deconstruction - shallow copy vs deep copy
  getContactList(): IContact[] {
    return [...this.contactList]
  }

  setSelectedContact(contactToUpdate: string) {
    console.log(contactToUpdate)
    const contact = this.contactList.find(contact => contact.id === contactToUpdate);
    if (contact === undefined) {
      console.error('unable to find contact')
      return;
    }
    console.log(contact)
    this.selectedContact = {...contact};
    this.$selectedContact.next(this.selectedContact)
  }

  onDelete(contactToDelete: IContact) {
    this.contactList = this.contactList.filter(
      contact => contact.id !== contactToDelete.id
    );
    this.$contactList.next(this.contactList)
    console.log(this.contactList)
  }

  onSave(contact: IContact){
    if (contact.id === "") {
      this.addContact(contact);
      console.log(contact.id)
    }
    console.log(this.selectedContact)
    this.createContact = false;
    this.$createContact.next(this.createContact)
    this.$selectedContact.next(this.selectedContact)
  }

  addContact(contact: IContact) {
    contact.id = uuidv4();
    this.contactList.push(contact);
  }

  onBack() {
    this.createContact = false
    this.$createContact.next(this.createContact)

  }

}
