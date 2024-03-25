import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OdbcRoutingModule } from './odbc-routing.module';
import { OdbcComponent } from './odbc.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OdbcComponent
  ],
  imports: [
    CommonModule,
    OdbcRoutingModule,
    CalendarModule,
    FormsModule
  ]
})
export class OdbcModule { }
