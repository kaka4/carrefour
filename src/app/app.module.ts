import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CARREFOUR_FEATURE_NAME} from "./store/state/carrefour.state";
import {CARREFOUR_REDUCERS} from "./store/reducers/app.reducer";
import {CARREFOUR_EFFECTS} from "./store/effects";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductClientService} from "./core/services/product-client.service";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: window.navigator.language.slice(0, 2),
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot({}),
    StoreModule.forFeature(CARREFOUR_FEATURE_NAME, CARREFOUR_REDUCERS),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(CARREFOUR_EFFECTS),
    StoreDevtoolsModule.instrument({
      name: '[Carrefour] Store',
      maxAge: 25,
      actionsBlocklist: ['@'],
      serialize: { options: { map: true } },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ProductClientService],
  bootstrap: [AppComponent],
})
export class AppModule {}
