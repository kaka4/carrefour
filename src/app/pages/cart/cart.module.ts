import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CartPageRoutingModule} from './cart-routing.module';

import {CartPage} from './cart.page';
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
