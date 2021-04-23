import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarSedeComponent } from './modificar-sede.component';

const routes: Routes = [{ path: '', component: ModificarSedeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class modificarSedeRoutingModule { }
