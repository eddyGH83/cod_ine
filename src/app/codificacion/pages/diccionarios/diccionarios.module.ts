import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiccionariosRoutingModule } from './diccionarios-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CorrectorComponent } from './corrector/corrector.component';
import { MatrizOcupActEconComponent } from './matriz-ocup-act-econ/matriz-ocup-act-econ.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    CorrectorComponent,
    MatrizOcupActEconComponent
  ],
  imports: [
    CommonModule,
    DiccionariosRoutingModule
  ]
})
export class DiccionariosModule { }
