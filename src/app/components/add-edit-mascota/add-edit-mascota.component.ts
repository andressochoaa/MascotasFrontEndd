import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-add-edit-mascota',
  templateUrl: './add-edit-mascota.component.html',
  styleUrls: ['./add-edit-mascota.component.css']
})
export class AddEditMascotaComponent {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  //variable string para mostrar segun sea la opcion que se eligió (add/edit)
  operation: string = 'Agregar';
  
  constructor(private fb: FormBuilder, private _mascotaService: MascotaService,
    private _snackBar: MatSnackBar, private _router: Router, private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      especie:['', Validators.required],
      raza:['', Validators.required],
      fechaNacimiento:['', Validators.required],
      idDueno:['', Validators.required]
    });

    //obtenemos el id
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if(this.id != 0){
      this.operation = 'Editar';
      this.obtenerMascota(this.id);
    }
  }

  //obtenemos mascota
  obtenerMascota(id: number){
    this.loading = true;
    this._mascotaService.getMascota(id).subscribe(data => {
      //mostramos los valores del id en el form editar
      this.form.patchValue({
        nombre: data.nombre,
        raza: data.raza,
        especie: data.especie,
        idDueno: data.idDueno,
        fechaNacimiento: data.fechaNacimiento
      })
      this.loading = false;
    })
  }

  agregarMascotaEditada(){
    //llenamos objeto mascota
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      especie: this.form.value.especie,
      raza: this.form.value.raza,
      fechaNacimiento: this.form.value.fechaNacimiento,
      idDueno: this.form.value.idDueno
    }

    //si no es 0 editamos, si 0 editamos
    if(this.id != 0){
      mascota.id = this.id;
      this.editarMascota(this.id, mascota);
    }else{
      this.agregarMascota(mascota);
    }
  }

  agregarMascota(mascota: Mascota){
    //enviamos el objeto al BE
    this._mascotaService.addMascota(mascota).subscribe(data => {
      //mostramos el mensaje de exito
      this.exitoMessage("agregada");
      // redireccionamos a la lista
      this._router.navigate(['/listaMascotas']);
    })
  }

  editarMascota(id: number, mascota: Mascota){
    this.loading = true;
    //enviamos al BE
    this._mascotaService.updateMascota(id, mascota).subscribe(() => {
      this.loading = false;
      //mensaje de exito
      this.exitoMessage("actualizada");
      //redireccionamos a la lista
      this._router.navigate(['/listaMascotas']);
    })
  }

  exitoMessage(text: string){
    this._snackBar.open('Mascota ' + text +' satisfactoriamente', '', {
      horizontalPosition: 'right',
      duration: 3000
    });
  }
}
