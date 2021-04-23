import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSedeRoutingModule } from './createSede-routing.module';
import { AnadirSedeComponent } from './anadir-sede.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AnadirSedeComponent],
  imports: [
    CommonModule,
    CreateSedeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class CreateSedeModule { }