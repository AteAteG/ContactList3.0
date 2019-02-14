import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from '../contact.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http:HttpClient) { }

  private contactUrl = 'http://localhost:8080/contact/';
  //private userUrl = '/api';

  public getContacts() {
    return this.http.get<Contact[]>(this.contactUrl);
  }
}
