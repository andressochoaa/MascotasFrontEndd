import { Component } from '@angular/core';
import {Mascota} from 'src/app/interfaces/mascota'

const ELEMENT_DATA: Mascota[] = [
  {nombre: 'Kira', especie: 'perro', raza: 'criollo', fechaNacimiento: '2022', idDueno: 19213 },
  {nombre: 'Luna', especie: 'perro', raza: 'mini pinscher', fechaNacimiento: '2020', idDueno: 21210 },
  {nombre: 'BradPitbull', especie: 'perro', raza: 'pitbull', fechaNacimiento: '2019', idDueno: 11344 },
  {nombre: 'Dale', especie: 'perro', raza: 'bulldog', fechaNacimiento: '2023', idDueno: 11111 },
  {nombre: 'Katy', especie: 'perro', raza: 'pinscher', fechaNacimiento: '2021', idDueno: 19920 },
  {nombre: 'Morgan', especie: 'perro', raza: 'beagle', fechaNacimiento: '2020', idDueno: 17582 }
];

@Component({
  selector: 'app-listmascotas',
  templateUrl: './listmascotas.component.html',
  styleUrls: ['./listmascotas.component.css'],
})
export class ListmascotasComponent {
  displayedColumns: string[] = ['nombre', 'especie', 'raza', 'fechaNacimiento', 'idDueno'];
  dataSource = ELEMENT_DATA;
}
