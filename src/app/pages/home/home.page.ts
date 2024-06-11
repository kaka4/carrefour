import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Store} from "@ngrx/store";
import {HomePageActions} from "../../store/actions";
import {selectAllProducts} from "../../store/selectors/home-page.selectors";

@Component({
  selector: 'app-folder',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  allProducts$ = this.store.select(selectAllProducts);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(HomePageActions.getAllProductsAtInit());
  }
}