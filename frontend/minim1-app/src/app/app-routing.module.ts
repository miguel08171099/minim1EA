import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'listado-sedes',
  pathMatch: 'full',

},
{ path: 'listado-sedes', loadChildren: () => import('./components/pages/listado-sedes/listadoSedes.module').then(m => m.ListadoSedesModule) }, 
{ path: 'anadir-sede', loadChildren: () => import('./components/pages/anadir-sede/createSede.module').then(m => m.CreateSedeModule) }, 
{ path: 'modificar-sede', loadChildren: () => import('./components/pages/modificar-sede/modificarSede.module').then(m => m.modificarSedeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
