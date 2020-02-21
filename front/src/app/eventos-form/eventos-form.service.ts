import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosFormService {

  private readonly API = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) { }

  create(curso) {
    return this.http.post(this.API, curso).pipe(
      tap(console.log)
    )
  }
}
