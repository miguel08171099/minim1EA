import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { modificarSedeRoutingModule } from './modificar-sede-routing.module';
import { ModificarSedeComponent } from './modificar-sede.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModificarSedeComponent],
  imports: [
    CommonModule,
    modificarSedeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class modificarSedeModule { }