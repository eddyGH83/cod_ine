import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarCargaCodificacionComponent } from './asignar-carga-codificacion/asignar-carga-codificacion.component';
import { AsignarCargaSupervisionComponent } from './asignar-carga-supervision/asignar-carga-supervision.component';
import { SupervisarCodificacionComponent } from './supervisar-codificacion/supervisar-codificacion.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'asignar-carga-codificacion', data: { breadcrumb: 'Asignar carga codificación' }, component: AsignarCargaCodificacionComponent},
    {path:'asignar-carga-supervision', data: { breadcrumb: 'Asignar carga supervisión' }, component: AsignarCargaSupervisionComponent},
    {path:'supervisar-codificacion', data: { breadcrumb: 'Supervisar codificación' }, component: SupervisarCodificacionComponent},
  ])],
  exports: [RouterModule]
})
export class CodificacionRoutingModule { }
