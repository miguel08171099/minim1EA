import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoSedesRoutingModule } from './listado-sedes-routing.module';
import { ListadoSedesComponent } from './listado-sedes.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListadoSedesComponent],
  imports: [
    CommonModule,
    ListadoSedesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class ListadoSedesModule { }