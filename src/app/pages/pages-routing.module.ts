import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandosComponent } from './comandos/comandos.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
      children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'usuarios',
          component: UsuarioComponent
        },
        {
          path: 'comandos',
          component: ComandosComponent
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
