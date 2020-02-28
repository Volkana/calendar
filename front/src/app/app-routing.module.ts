import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EventsComponent } from './events/events.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';
import { EventosFormModule } from './eventos-form/eventos-form.module';
import { AuthGuard } from './_guards/auth.guard';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'events', component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'events/edit/:id', component: EventosFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'novo', component: EventosFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
