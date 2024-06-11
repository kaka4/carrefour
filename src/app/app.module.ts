import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {CARREFOUR_FEATURE_NAME} from "./store/state/carrefour.state";
import {CARREFOUR_REDUCERS} from "./store/reducers/app.reducer";
import {CARREFOUR_EFFECTS} from "./store/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
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
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
