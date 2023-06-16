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
}

