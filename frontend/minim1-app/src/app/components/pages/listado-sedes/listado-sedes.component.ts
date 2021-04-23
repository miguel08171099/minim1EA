import { Component, OnInit } from '@angular/core';
import { Sede } from 'src/app/shared/models/sede.interface';
import { SedeService } from 'src/app/shared/services/sede.service';
import { take } from 'rxjs/operators';
import {Router} from '@angular/router'

@Component({
  selector: 'app-listado-sedes',
  templateUrl: './listado-sedes.component.html',
  styleUrls: ['./listado-sedes.component.css']
})
export class ListadoSedesComponent implements OnInit {

  sedes: Sede[] = [];
  private query: string = '';

  constructor(private sedeSvc: SedeService,) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.sedeSvc
      .listSedes(this.query).pipe(take(1)).subscribe((res: any) => {

        if (res.code == "200") {
          //console.log(res.usersList)
    
          this.sedes = res.sedesList;
          
        } else {
          this.sedes = [];
        }
      
  })
}
}
