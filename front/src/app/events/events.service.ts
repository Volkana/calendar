import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

import { Todo } from '../events/event.schematic';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly API = 'http://localhost:3000/todo';

  constructor( private http: HttpClient ) { }

  list() {
    return this.http.get<Todo[]>(this.API)
    .pipe(
      delay(1000),
      tap(console.log)
    );
  }

  save(todo) {
    if (todo.id) {
      return this.update(todo);
    }
    return this.create(todo);
  }

  create(todo) {
      return this.http.post(this.API, todo).pipe(
        tap(console.log)
      );
    }

    update(todo) {
      return this.http.put(`${this.API}/${todo.id}`, todo).pipe(take(1));
    }

    delete(todo) {
      return this.http.delete(`${this.API}/${todo.id}`).pipe(take(1));
    }

  findOne(id) {
    return this.http.get(`${this.API}/${id}`).pipe(
      take(1)
    );
  }
}
