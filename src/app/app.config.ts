import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '47373341870-6ift1mqc5s8bhpvvousid5jlsj9enfnl.apps.googleusercontent.com'
            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
};
