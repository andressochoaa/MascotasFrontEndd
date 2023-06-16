import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Mascota} from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-listmascotas',
  templateUrl: './listmascotas.component.html',
  styleUrls: ['./listmascotas.component.css'],
})

export class ListmascotasComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'especie', 'raza', 'fechaNacimiento', 'idDueno', 'acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void{
    this.obtenerMascotas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Cantidad de items';
    this.dataSource.sort = this.sort;
  }

  //listado mascotas mediante i dep
  constructor(private _snackBar: MatSnackBar, private _mascotaService:MascotaService) { }

  // filtro busqueda
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //listado mediante iny depend
  obtenerMascotas() {
    this.loading = true;
    this._mascotaService.getMascotas().subscribe(data => {
      this.dataSource.data = data;
      this.loading = false;
    }, error => {
      this.loading = false,
      alert("Perdón, está ocurriendo un error...")
    });
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
