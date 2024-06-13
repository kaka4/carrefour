import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOptimizedImage,
    TranslateModule,
  ],
  declarations: [ProductCardComponent],
  exports: [ProductCardComponent]
})
export class SharedModule {}
