import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {
    email: 'email@email.com',
    password: null
  };

  onSubmit(form) {
    console.log(this.usuario);
    if (this.usuario.email === 'admin@admin.com') {
      console.log(this.usuario);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
