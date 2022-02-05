import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SocialLoginModule
  ],
  exports: [LoginComponent],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService
  ],
})
export class LoginModule { }
