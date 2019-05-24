import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { RequestResetComponent } from './componentes/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { EntidadComponent } from './activos/entidad/entidad.component';
import { GrupoInvestigacionComponent } from './activos/grupo-investigacion/grupo-investigacion.component';
import { InvestigadorComponent } from './activos/investigador/investigador.component';
import { ProyectoComponent } from './activos/proyecto/proyecto.component';



//creamos las rutas por donde navegaremos
//cada path sera un alias del componente por el que queremos navegar
const routes: Routes = [
  // Rutas del componente lOGUEO
  {path: "login",   component:LoginComponent,
  canActivate : [BeforeLoginService]},
  {path: "signup",  component:SignupComponent,
  canActivate : [BeforeLoginService]},
  {path: "profile", component:ProfileComponent,
  canActivate : [AfterLoginService]},
  {path: "request-reset", component:RequestResetComponent,
  canActivate : [BeforeLoginService]},
  {path: "response-reset", component:ResponseResetComponent,
  canActivate : [BeforeLoginService]},
  //RUTAS DEL COMPONENTE DE ACTIVOS
  {path: "entidad", component:EntidadComponent,
  canActivate : [AfterLoginService]},
  {path: "grupo-investigacion", component: GrupoInvestigacionComponent,
  canActivate : [AfterLoginService]},
  {path: "investigador", component: InvestigadorComponent,
  canActivate : [AfterLoginService]},
  {path: "proyecto", component: ProyectoComponent,
  canActivate : [AfterLoginService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
