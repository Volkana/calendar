import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

import { User } from './../models/user.schematic';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/author';

  save(user) {
    if (user.id) {
      return this.update(user);
    }
    return this.create(user);
  }

  create(user) {
      return this.http.post(this.API, user).pipe(
        tap(console.log)
      );
    }

    update(user) {
      return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
    }

    delete(user) {
      return this.http.delete(`${this.API}/${user.id}`).pipe(take(1));
    }

  findOne(id) {
    return this.http.get(`${this.API}/${id}`).pipe(
      take(1)
    );
  }
}
