import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EventsService } from '../events/events.service';
import { Todo } from '../events/event.schematic';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

import { Observable, Subject, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  bsModalRef: BsModalRef;
  todo$: Observable<Todo[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: EventsService,
    private modalService: BsModalService) { }

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.todos = dados);
    this.todo$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        this.handleError();
        return empty();

      })
    );
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar todo';
  }
}
