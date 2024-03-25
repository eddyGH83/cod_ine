import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [  
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    CheckboxModule,
    ChipModule,
    ChipsModule,
    ButtonModule    
  ]
})
export class PerfilModule { }
