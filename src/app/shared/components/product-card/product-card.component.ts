import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Product} from "../../../core/models/product.model";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'carrefour-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  @Output()
  addToCart = new EventEmitter<Product>();


  get filledStars(): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.round(this.product.rating.rate));
    }
    return stars;
  }

  addProductToCart(): void {
    this.addToCart.emit(this.product);
  }
}
