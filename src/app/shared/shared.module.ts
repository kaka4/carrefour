import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TranslateModule} from "@ngx-translate/core";
import {MobileHeaderComponent} from "./components/mobile-header/mobile-header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOptimizedImage,
    TranslateModule,
    RouterLinkActive,
    RouterLink,
  ],
  declarations: [ProductCardComponent, MobileHeaderComponent],
  exports: [ProductCardComponent, MobileHeaderComponent]
})
export class SharedModule {}
