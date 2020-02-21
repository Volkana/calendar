import { EventosFormComponent } from '../eventos-form/eventos-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '', component: EventsComponent
  },
  {
    path: 'novo', component: EventosFormComponent
  },
  {
    path: 'editar/:id', component: EventosFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
