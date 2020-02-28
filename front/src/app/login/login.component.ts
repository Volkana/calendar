import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from './auth.service';
import { User } from './../models/user.schematic';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly API = 'http://localhost:3000/author';
  private usuario = {
    email: null,
    senha: null
  };
  private form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null,  [Validators.required]],
      });
  }


  onSubmit() {
    console.log("iu");
    this.convert();
    this.authService.login(this.usuario);
    console.log("iu");
  }

  convert() {
    this.usuario.email = this.form.value.email;
    this.usuario.senha = this.form.value.senha;
  }

}
