import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
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
  
  constructor(private fb: FormBuilder, private _mascotaService: MascotaService,
    private _snackBar: MatSnackBar, private _router: Router) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      especie:['', Validators.required],
      raza:['', Validators.required],
      fechaNacimiento:['', Validators.required],
      idDueno:['', Validators.required]
    });
  }

  agregarMascota(){
    //llenamos objeto mascota
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      especie: this.form.value.especie,
      raza: this.form.value.raza,
      fechaNacimiento: this.form.value.fechaNacimiento,
      idDueno: this.form.value.idDueno
    }

    //enviamos el objeto al BE
    this._mascotaService.addMascota(mascota).subscribe(data => {
        //mostramos el mensaje de exito
        this.exitoMessage();
        // redireccionamos a la lista
        this._router.navigate(['/listaMascotas']);
    })
  }

  exitoMessage(){
    this._snackBar.open('Mascota agregada satisfactoriamente.', '', {
      horizontalPosition: 'right',
      duration: 3000
    });
  }
}
