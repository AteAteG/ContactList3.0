import { Component, OnInit } from '@angular/core';
//import {Router}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contacts : Contact
  constructor() { }

  ngOnInit() {
  }

}
