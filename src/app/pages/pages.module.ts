import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ComandosComponent } from './comandos/comandos.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    UsuarioComponent,
    ComandosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    //HttpClientModule
  ]
})
export class PagesModule { }
