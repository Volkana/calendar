import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

import { AlertModalComponent } from './../shared/alert-modal/alert-modal.component';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  bsModalRef: BsModalRef;
  user: {
    nome: null,
    email: null,
    senha: null,
  };

  constructor(
    private fb: FormBuilder,
    private eventService: SignUpService,
    private modalService: BsModalService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null,  [Validators.required]],
      senhaR: [null, [Validators.required]]
      });
  }

  onSubmit() {
    this.submitted = true;
    if (this.passUser()) {
      this.eventService.save(this.user).subscribe(
        success => this.popup('success', 'Usuário salvo com sucesso'),
        error => this.popup('error', error),
        () => this.router.navigate(['login'])
      );
    }

  }

  popup(type: string, msg?: string) {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = type;
    this.bsModalRef.content.message = msg;
  }

  passUser() {
    this.user.nome = this.form.value.nome;
    this.user.email = this.form.value.email;
    if (this.form.value.senha === this.form.value.senhaR) {
      this.user.senha = this.form.value.senha;
      return true;
    }
    return false;
  }

}
