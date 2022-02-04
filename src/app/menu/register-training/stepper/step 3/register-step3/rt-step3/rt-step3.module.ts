import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RtStep3RoutingModule } from './rt-step3-routing.module';
import { RtStep3Component } from './rt-step3.component';
import { LoginComponent } from 'src/app/menu/login/login.component';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AuthGuardService } from 'src/app/menu/login/auth-guard.service';
import { LoginModule } from 'src/app/menu/login/login.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [RtStep3Component],
  exports: [RtStep3Component],
  imports: [
    CommonModule,
    RtStep3RoutingModule,
    LoginModule,
    MatCardModule
  ],
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
    AuthGuardService],
  
})
export class RtStep3Module { }
