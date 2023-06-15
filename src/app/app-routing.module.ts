import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ListmascotasComponent } from './components/listmascotas/listmascotas.component';
import { AddEditMascotaComponent } from './components/add-edit-mascota/add-edit-mascota.component';
import { ViewMascotasComponent } from './components/view-mascotas/view-mascotas.component';

//Ruteo
const routes: Routes = [
  {path: '', redirectTo: 'listaMascotas', pathMatch: 'full' },
  {path: 'listaMascotas', component: ListmascotasComponent },
  {path: 'agregarMascota', component: AddEditMascotaComponent },
  {path: 'verMascota/:id', component: ViewMascotasComponent },
  {path: 'editarMascota/:id', component: AddEditMascotaComponent },
  {path: '**', redirectTo: 'listaMascotas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
