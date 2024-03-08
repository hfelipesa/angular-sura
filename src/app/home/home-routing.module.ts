import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StylesComponent } from './pages/styles/styles.component';
import { ColoresComponent } from './components/colores/colores.component';
import { TipografiaComponent } from './components/tipografia/tipografia.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BotonesComponent } from './components/botones/botones.component';
import { IconosComponent } from './components/iconos/iconos.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { ModalesComponent } from './components/modales/modales.component';

const routes: Routes = [
  {
    path:'',
    component: StylesComponent,
    children:[
      {
        path: 'colores',
        component: ColoresComponent
      },
      {
        path:'tipografia',
        component:TipografiaComponent
      },
      {
        path: 'formulario',
        component:FormularioComponent
      },
      {
        path: 'botones',
        component: BotonesComponent
      },
      {
        path: 'iconos',
        component: IconosComponent
      },
      {
        path: 'tablas',
        component: TablasComponent      
      },
      {
        path: 'modales',
        component: ModalesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
