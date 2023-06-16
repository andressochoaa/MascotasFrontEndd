import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  AplicacionUrl: string = environment.endpoint;
  ApiUrl: string = 'api/Mascota/';
  
  constructor() { }
}
