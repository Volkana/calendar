import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EventsComponent } from './events/events.component';
import { FormValidComponent } from './form-valid/form-valid.component';
import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { EventsRoutingModule } from './events/events-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    EventsComponent,
    FormValidComponent,
    EventosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
