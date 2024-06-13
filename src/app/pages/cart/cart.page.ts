import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  selectAllProductCart,
  selectCartDeliveryFee,
  selectCountProductsInCart,
  selectSumAllProductsInCart,
  selectTotalSumToPay
} from "../../store/selectors/cart-page.selectors";
import {CartPageActions} from "../../store/actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {

  productsCart$ = this.store.select(selectAllProductCart);
  cartQuantity$ = this.store.select(selectCountProductsInCart);
  productsTotal$ = this.store.select(selectSumAllProductsInCart);
  deliveryFee$ = this.store.select(selectCartDeliveryFee);
  totalToPay$ = this.store.select(selectTotalSumToPay);


  constructor(private store: Store) { }

  updateQuantity(productId: string, newQty: number): void{
    this.store.dispatch(CartPageActions.updateProductQuantity({productId: productId, quantity: newQty}))
  }

  order():void {
    console.log("...Not implemented...")
  }

}
