import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Mascota} from 'src/app/interfaces/mascota';

const listMascotas: Mascota[] = [
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

export class ListmascotasComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'especie', 'raza', 'fechaNacimiento', 'idDueno', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Cantidad de items';
    this.dataSource.sort = this.sort;
  }

  constructor(private _snackBar: MatSnackBar){
  }

  // filtro busqueda
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // mensaje eliminacion de mascota
  eliminarMascota(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('Mascota eliminada satisfactoriamente.', '', {
        horizontalPosition: 'right',
        duration: 3000
      });
    }, 3000);
  }
}
