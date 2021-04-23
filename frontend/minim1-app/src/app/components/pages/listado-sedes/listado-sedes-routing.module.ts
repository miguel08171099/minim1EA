import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSedesComponent } from './listado-sedes.component';

const routes: Routes = [{ path: '', component: ListadoSedesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoSedesRoutingModule { }
