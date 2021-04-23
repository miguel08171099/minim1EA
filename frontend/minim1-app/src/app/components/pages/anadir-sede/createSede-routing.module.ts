import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirSedeComponent } from './anadir-sede.component';

const routes: Routes = [{ path: '', component: AnadirSedeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSedeRoutingModule { }