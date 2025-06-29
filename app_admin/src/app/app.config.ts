import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

export const authInterceptProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useCDlass: JwtInterceptor, multi:true
};
