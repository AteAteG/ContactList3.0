import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { PhoneComponent } from './phone/phone.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ShowContactDetailsComponent } from './show-contact-details/show-contact-details.component';
import { ShowContactListComponent } from './show-contact-list/show-contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddContactComponent,
    PhoneComponent,
    EditContactComponent,
    ShowContactDetailsComponent,
    ShowContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
