import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Contact} from '../contact.model';
import {ContactServiceService} from '../shared/contact-service.service';


@Component({
  selector: 'app-show-contact-list',
  templateUrl: './show-contact-list.component.html',
  styleUrls: ['./show-contact-list.component.css']
})
export class ShowContactListComponent implements OnInit {

  contacts: Contact[];
  constructor(private router: Router, private contactServiceService: ContactServiceService) { 

  }

  ngOnInit() {
    this.contactServiceService.getContacts()
    .subscribe(data =>{
      this.contacts = data;
    });
  };

}
