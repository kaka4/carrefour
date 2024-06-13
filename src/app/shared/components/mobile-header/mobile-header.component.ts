import {Component, Input} from "@angular/core";
import {selectCountProductsInCart} from "../../../store/selectors/cart-page.selectors";
import {Store} from "@ngrx/store";
import {RoutePathEnum} from "../../../app-routing.module";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'carrefour-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.scss'],
})
export class MobileHeaderComponent {
  @Input()
  title!: string;

  cartUrl = `/${RoutePathEnum.CART}`;

  cartQuantity$ = this.store.select(selectCountProductsInCart);

  constructor(private store: Store) {}

  protected readonly RoutePathEnum = RoutePathEnum;
}
