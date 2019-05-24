import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//el routeo de componentes creados
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { PasswordComponent } from './componentes/password/password.component';
import { RequestResetComponent } from './componentes/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/response-reset/response-reset.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
//importacion del formModulo
import { FormsModule } from "@angular/forms";
//importamos libreria http para hacer peticiones a servicios
import { HttpClientModule } from "@angular/common/http";

// Libreria de notificacion
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { ProyectoComponent } from './activos/proyecto/proyecto.component';
import { EntidadComponent } from './activos/entidad/entidad.component';
import { InvestigadorComponent } from './activos/investigador/investigador.component';
import { GrupoInvestigacionComponent } from './activos/grupo-investigacion/grupo-investigacion.component';
import { MapaModule } from './geolocalizacion/mapa.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    PasswordComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProyectoComponent,
    EntidadComponent,
    InvestigadorComponent,
    GrupoInvestigacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MapaModule  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
