import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, NgForm  } from '@angular/forms';
import {SedeService} from '../../../shared/services/sede.service'
import { Router } from '@angular/router';
import { Sede } from 'src/app/shared/models/sede.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-anadir-sede',
  templateUrl: './anadir-sede.component.html',
  styleUrls: ['./anadir-sede.component.css']
})
export class AnadirSedeComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  }); 

  constructor(private fb:FormBuilder,private sedeSvc:SedeService,private router:Router) { }

  crearSede = new FormGroup({
    nombreSede: new FormControl('',[Validators.required]),
    localizacion: new FormControl('',[Validators.required]),
    poblacion: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
    try{
      this.crearSede = this.fb.group({
        nombreSede: new FormControl(''),
        localizacion: new FormControl('')
      })
    }
    catch{
      throw new Error('Method not implemented.');
    }
  }

  addSede(nombreSedeValue:string, localizacionValue:string, poblacionValue:string):void {

    if(this.crearSede.valid){

      let sede: Sede;
      this.sedeSvc.createSede(nombreSedeValue, localizacionValue, poblacionValue)
      .pipe(take(1)).subscribe((res: any) =>{
        //Miramos que respuesta nos envia 
        if(res.code = "200"){
          //si es correcte tornarem a la pagina de tots els usauris
          this.router.navigate(['/getSedes']);
        }
        else{
          alert("Sede no creada correctamente")
        }
      });
    }
    else{ 
    }

  }
}
