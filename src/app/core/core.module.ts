import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import.guard';

import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { ApiService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const PROVIDERS = [
  ApiService
]

@NgModule({
  declarations: [],
  imports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...PROVIDERS,
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
      ]
    }
  }
}
