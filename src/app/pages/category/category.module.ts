import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CategoryPageRoutingModule} from './category-routing.module';

import {CategoryPage} from './category.page';
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
