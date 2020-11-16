import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { BotonesComponent } from './botones/botones.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { ComponentesRouterModule } from './componentes.routes';
import { PaisesComponent } from './paises/paises.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations:
    [ComponentesComponent,
      BotonesComponent,
      TarjetasComponent,
      BusquedaComponent,
      CancelacionComponent,
      PaisesComponent,
      PaisDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    ComponentesRouterModule
  ]
})
export class ComponentesModule { }
