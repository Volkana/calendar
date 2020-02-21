import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormValidComponent } from '../form-valid/form-valid.component';



@NgModule({
  declarations: [
    FormValidComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
