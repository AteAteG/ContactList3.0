import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddUserComponent } from './contact/add-user/add-user.component';
import { AddContactComponent } from './contact/add-contact/add-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AddUserComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
