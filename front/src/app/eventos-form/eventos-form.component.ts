import { EventsService } from './../events/events.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

import { EventosFormService } from './eventos-form.service';
import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-eventos-form',
  templateUrl: './eventos-form.component.html',
  styleUrls: ['./eventos-form.component.css']
})
export class EventosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  bsModalRef: BsModalRef;

  constructor(private fb: FormBuilder,
              private eventService: EventsService,
              private modalService: BsModalService,
              private Actrouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.Actrouter.params
    .pipe(
      map( (params: any) => params['id'] ),
      switchMap( id => this.eventService.findOne(id) )
    )
    .subscribe( todo => this.updateForm(todo) );

    this.form = this.fb.group({
      id: [null],
      author: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      dataInicio: [null],
      horaInicio: [null],
      horaFim: [null]
    });
  }
  onSubmit() {
    this.submitted = true;
    this.eventService.save(this.form.value).subscribe(
      success => this.popup('success', 'Evento salvo com sucesso'),
      error => this.popup('error', error),
      () => this.router.navigate(['events'])
    );
  }


  popup(type: string, msg?: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = msg;
  }

  updateForm(todo) {
    this.form.patchValue({
      id: todo.id,
      author: todo.author,
      dataInicio: todo.dataInicio,
      horaInicio: todo.horaInicio,
      horaFim: todo.horaFim,
      nome: todo.nome
    });
  }

}
