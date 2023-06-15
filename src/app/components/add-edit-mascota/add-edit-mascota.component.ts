import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interfaces/mascota';

@Component({
  selector: 'app-add-edit-mascota',
  templateUrl: './add-edit-mascota.component.html',
  styleUrls: ['./add-edit-mascota.component.css']
})
export class AddEditMascotaComponent {
  loading: boolean = false;
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      especie:['', Validators.required],
      raza:['', Validators.required],
      fechaNacimiento:['', Validators.required],
      idDueno:['', Validators.required]
    });
  }

  agregarMascota(){
    //objeto mascota
    const mascota: Mascota = {
      nombre: this.form.value.nombre,
      especie: this.form.value.especie,
      raza: this.form.value.raza,
      fechaNacimiento: this.form.value.fechaNacimiento,
      idDueno: this.form.value.idDueno
    }
  }
}
