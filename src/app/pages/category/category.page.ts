import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {
  selectAllProductsFromCategory,
  selectIsCategoryPageLoading
} from "../../store/selectors/category-page.selectors";
import {CategoryPageActions, HomePageActions} from "../../store/actions";
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit, OnDestroy {
  public categoryId!: string | null;

  products$ = this.store.select(selectAllProductsFromCategory);
  isLoading$ = this.store.select(selectIsCategoryPageLoading);
  subscription = new Subscription()
  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit() {
    this.subscription.add(this.route.paramMap.subscribe((params: ParamMap) => {
      console.log("test");
      this.categoryId = params.get('categoryId');
      if (this.categoryId){
        this.store.dispatch(CategoryPageActions.getAllProductsFromCategory({categoryId: this.categoryId}))
      }
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
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
