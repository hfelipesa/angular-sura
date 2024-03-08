import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StylesComponent } from './pages/styles/styles.component';
import { ColoresComponent } from './components/colores/colores.component';
import { TipografiaComponent } from './components/tipografia/tipografia.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BotonesComponent } from './components/botones/botones.component';
import { IconosComponent } from './components/iconos/iconos.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { ModalesComponent } from './components/modales/modales.component';


@NgModule({
  declarations: [
    StylesComponent,
    ColoresComponent,
    TipografiaComponent,
    FormularioComponent,
    BotonesComponent,
    IconosComponent,
    TablasComponent,
    ModalesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
