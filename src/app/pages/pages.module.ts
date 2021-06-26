import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    //ReactiveFormsModule,
    SharedModule,
    //HttpClientModule
  ]
})
export class PagesModule { }
