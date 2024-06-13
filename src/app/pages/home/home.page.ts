import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {HomePageActions} from "../../store/actions";
import {
  selectAllProducts,
  selectIsHomePageLoading,
  selectProductsByPriceRange
} from "../../store/selectors/home-page.selectors";
import {Product} from "../../core/models/product.model";
import {RangeCustomEvent} from "@ionic/angular";

const PRICE_MULTIPLIER = 10; // ion-range max value is set to 100


@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{


  products$ = this.store.select(selectAllProducts);
  isLoading$ = this.store.select(selectIsHomePageLoading);
  pinFormatter(value: number) {
    return `${value * PRICE_MULTIPLIER}$`;
  }

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(HomePageActions.getAllProductsAtInit());
  }


  addProductToCart(product: Product): void {
    this.store.dispatch(HomePageActions.addProductToCart({
      product: {
        id: product.id,
        category: product.category,
        title: product.title,
        image: product.image,
        price: product.price,
      }
    }))
  }

  priceFilterChanged(event: RangeCustomEvent){
    if (typeof event.detail.value !== "number") {
      this.products$ = this.store.select(selectProductsByPriceRange(event.detail.value.lower * PRICE_MULTIPLIER, event.detail.value.upper * PRICE_MULTIPLIER));
    }
  }

}
