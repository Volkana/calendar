import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EventsService } from '../events/events.service';
import { Todo } from '../events/event.schematic';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';

import { Observable, Subject, empty } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  bsModalRef: BsModalRef;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModel', {static: false}) deleteModel;

  todo: Todo;
  todo$: Observable<Todo[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: EventsService,
    private modalService: BsModalService) { }

  ngOnInit() {
    // this.service.list()
    // .subscribe(dados => this.todos = dados);
    this.onRefresh();
  }

  onRefresh() {
    this.todo$ = this.service.list()
    .pipe(
      map(
        todo => {
          return todo.sort(
          (a: Todo, b: Todo) => {
            const Data1 = new Date(a.dataInicio).getTime();
            const Data2 = new Date(b.dataInicio).getTime();
            return Data1 - Data2;
          }
        );
      },
      ),
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        this.handleError('Erro ao carregar todo');
        return empty();
      })
    );

  }


  onDelete(todo) {
    this.todo = todo;
    this.deleteModalRef = this.modalService.show(this.deleteModel, {class: 'modal-sm'});
    console.log(this.deleteModel);
  }

  onConfirm() {
    this.service.delete(this.todo).subscribe(
      success => {
        this.onRefresh(),
        this.deleteModalRef.hide();
      },
      error => {
        this.deleteModalRef.hide(),
        this.handleError('Não foi possível deletar o todo');
      }
    );
  }

  onDecline() {
    this.deleteModalRef.hide();
  }

  handleError(msg: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = msg;
  }
}
