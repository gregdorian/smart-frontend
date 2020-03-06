import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RsidebarComponent } from './UIView/rsidebar/rsidebar.component';
//import { EncabezadoComponent } from './UIView/StaticComponents/encabezado/encabezado.component';
//import { FooterComponent } from './UIView/StaticComponents/footer/footer.component';
//import { AdministracionComponent } from './FrontModules/administracion/administracion.component';
//import { CalculosComponent } from './FrontModules/calculos/calculos.component';
//import { ConsultasComponent } from './FrontModules/consultas/consultas.component';
//import { PlanReduccionComponent } from './FrontModules/plan-reduccion/plan-reduccion.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    RsidebarComponent,
    //EncabezadoComponent,
    //FooterComponent,
    //AdministracionComponent,
    //CalculosComponent,
    //ConsultasComponent,
    //PlanReduccionComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
