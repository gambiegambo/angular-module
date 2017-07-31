import { SharedModule } from './../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
