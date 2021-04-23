import { Injectable } from '@angular/core';
import { Sede } from '../models/sede.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(private http: HttpClient) { }

  createSede(nombreSede: string, localizacion: string,poblacion: string):Observable<any> {
    return this.http.post(`${environment.baseUrlAPI}/createSede`,
        {
          nombreSede: nombreSede,
          localizacion: localizacion,
          poblacion: poblacion
        });
  }

  listSedes(query = ''):Observable<any> {
    return this.http.get(`${environment.baseUrlAPI}/getSedes`);
  }

  updateSede(id: string, nombreSede: string, localizacion: string,poblacion: string): Observable<any> {
    return this.http.put(`${environment.baseUrlAPI}/updateSede/${id}`, 
    
    {
      nombreSede: nombreSede,
      localizacion: localizacion,
      poblacion: poblacion
    });
  }
  getSedeById(id:string):Observable<any>{
    return this.http.get(`${environment.baseUrlAPI}/getSede/${id}`);  
  }


}
