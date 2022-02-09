import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

// necessary imports
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthGuardService } from './auth-guard.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    /**Needed modules for the login component */
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
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
          // ONLINE: '148517665605-jspahbqleats6lvlag9kasc2c11b5g7o.apps.googleusercontent.com'
          // MIO: '899314583596-npnuh1nsukq1t23ao4b0u49d1589tgbf.apps.googleusercontent.com'
          provider: new GoogleLoginProvider('899314583596-npnuh1nsukq1t23ao4b0u49d1589tgbf.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService
  ],
})
export class LoginModule { }
