import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from "@ngrx/store";
import {HomePageActions} from "../../store/actions";
import {selectIsHomePageLoading, selectAllProducts} from "../../store/selectors/home-page.selectors";
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  allProducts$ = this.store.select(selectAllProducts);
  isLoading$ = this.store.select(selectIsHomePageLoading);

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(HomePageActions.getAllProductsAtInit());
  }

  ngOnDestroy() {
    this.store.dispatch(HomePageActions.clearAllProductsAtDestroy())
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
}
