import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospitales } from '../dtos/Hospitales.dto';

@Injectable({
  providedIn: 'root'
})
export class HospitalesserviceService {

  constructor(private httpClient: HttpClient) { }

  listarHospitales(): Observable<Hospitales[]>{
    return this.httpClient.get<Hospitales[]>('http://localhost:8084/api/v1/hospitales');
  }

  eliminarHospital(id: number): Observable<any>{
    return this.httpClient.delete(`http://localhost:8084/api/vi/hospital/eliminar/${id}`);
    // http://localhost:8084/api/vi/hospital/eliminar/{id}
   }

}
