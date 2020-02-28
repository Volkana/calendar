import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { User } from './../models/user.schematic';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado = false;

  constructor(private router: Router) { }

  login(user) {
    if (user.email === 'admin' && user.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/events']);
    } else {
      this.usuarioAutenticado = false;
    }
  }

  userIsAuthenticated() {
    return this.usuarioAutenticado;
  }
}
