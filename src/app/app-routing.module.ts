import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { MaquinariaListComponent } from './components/maquinaria-list/maquinaria-list.component';
import { MaquinariaCardComponent } from './components/maquinaria-card/maquinaria-card.component';
import { MaquinariaFormComponent } from './components/maquinaria-form/maquinaria-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaFormComponent},
  {path: 'materias/:id', component: MateriaFormComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  {path: 'maquinaria/form', component: MaquinariaFormComponent},
  {path: 'maquinaria/form/:id', component: MaquinariaFormComponent},
  {path: 'maquinaria/list', component: MaquinariaListComponent},
  {path: 'maquinaria/card/:id', component: MaquinariaCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
