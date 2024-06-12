import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectAllProductCart, selectCountProductsInCart} from "../../store/selectors/cart-page.selectors";
import {CartPageActions} from "../../store/actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  productsCart$ = this.store.select(selectAllProductCart);
  public cartQuantity$ = this.store.select(selectCountProductsInCart);

  constructor(private store: Store) { }

  updateQuantity(productId: string, newQty: number): void{
    this.store.dispatch(CartPageActions.updateProductQuantity({productId: productId, quantity: newQty}))
  }

}
