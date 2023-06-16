import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mascota } from '../interfaces/mascota';

@Injectable({
  providedIn: 'root'
})

export class MascotaService {

  private AplicacionUrl: string = environment.endpoint;
  private ApiUrl: string = 'api/Mascota/';

  //lista mascotas mediante i dep
  constructor(private http: HttpClient) {}

  //obteniendo array de mascotas
  getMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.AplicacionUrl}${this.ApiUrl}`);
  }

  //obteniendo mascota por id
  getMascota(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${this.AplicacionUrl}${this.ApiUrl}${id}`);
  }

  //borramos mascota por id
  deleteMascota(id: number): Observable<void>{
    return this.http.delete<void>(`${this.AplicacionUrl}${this.ApiUrl}${id}`)
  }

  //agregar una nueva mascota
  addMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>(`${this.AplicacionUrl}${this.ApiUrl}`, mascota);
  }
}

