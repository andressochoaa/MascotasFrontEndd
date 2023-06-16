import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-view-mascotas',
  templateUrl: './view-mascotas.component.html',
  styleUrls: ['./view-mascotas.component.css']
})
export class ViewMascotasComponent {
  id: number;
  mascota!: Mascota;
  loading: boolean = false;

  constructor(private _mascotaService: MascotaService, private actRoute: ActivatedRoute){
    //obtenemos el id como entero
    this.id = parseInt(this.actRoute.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void{
    this.obtenerMascota();
  }

  //obtenemos la mascota segun su id
  obtenerMascota() {
    this.loading = true;
    this._mascotaService.getMascota(this.id).subscribe(data => {
      this.loading = false;
      this.mascota = data;
    })
  }

}

