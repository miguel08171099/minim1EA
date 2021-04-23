import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SedeService } from 'src/app/shared/services/sede.service';
import { take } from 'rxjs/operators';
import { Sede } from 'src/app/shared/models/sede.interface';

@Component({
  selector: 'app-modificar-sede',
  templateUrl: './modificar-sede.component.html',
  styleUrls: ['./modificar-sede.component.css']
})
export class ModificarSedeComponent implements OnInit {

  sede: any;
  constructor(private sedeSvc:SedeService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
        //Recuperem les dades dels usuaris per reomplir els valors 
        this.route.params.pipe(take(1)).subscribe((params)=>{
          const id = params['id'];
         // const name = params['name']
         this.sedeSvc.getSedeById(id).subscribe(data => {
          if(data.code = "200"){
            //tenim resposat correcta
            console.log(data.sede)
            this.sede = data.sede;
            console.log(this.sede);
          }
          else{
            console.log("Error: Dades d'usuario incorrecte")
          }
        }); 
          
      });
  }

  updateSede (nombreSedeValue:string, localizacionValue:string, poblacionValue:string) {
    //Recuperem els id del path params
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];

    //enviem les dades al servei de l'usuari
    this.sedeSvc.updateSede(id,nombreSedeValue, localizacionValue, poblacionValue).subscribe(res => {

      //Comprovem la resposta que ens dona de la bbdd
      if(res.code = "200"){
        //si es correcte tornarem a la pagina de tots els usauris
        

        this.router.navigate(['/users-details',id]);
      }
      else{
        alert("Usuario no creado correctamente")
      }
    });
  });
}
}
