import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {MenuAction, SystemActions} from "./store/actions";
import {selectProductCategories} from "./store/selectors/menu.selectors";
import {RoutePathEnum} from "./app-routing.module";
import {selectCountProductsInCart} from "./store/selectors/cart-page.selectors";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  routePathEnum = RoutePathEnum;

  public menuList = [
    { title: this.translateService.get('menu.home'), url: `/${this.routePathEnum.HOME}`, icon: 'home' },
    { title: this.translateService.get('menu.cart'), url: `/${this.routePathEnum.CART}`, icon: 'cart' },
  ];
  public categories$ = this.store.select(selectProductCategories);
  public cartQuantity$ = this.store.select(selectCountProductsInCart);

  constructor(private translateService: TranslateService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(SystemActions.initApp());
  }
}
