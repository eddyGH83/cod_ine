import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodificacionRoutingModule } from './codificacion-routing.module';
import { AsignarCargaCodificacionComponent } from './asignar-carga-codificacion/asignar-carga-codificacion.component';
import { AsignarCargaSupervisionComponent } from './asignar-carga-supervision/asignar-carga-supervision.component';
import { SupervisarCodificacionComponent } from './supervisar-codificacion/supervisar-codificacion.component';


@NgModule({
  declarations: [
    AsignarCargaCodificacionComponent,
    AsignarCargaSupervisionComponent,
    SupervisarCodificacionComponent
  ],
  imports: [
    CommonModule,
    CodificacionRoutingModule
  ]
})
export class CodificacionModule { }
