import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {MenuAction} from "./store/actions";
import {selectProductCategories} from "./store/selectors/menu.selectors";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public menuList = [
    { title: this.translateService.get('menu.cart'), url: '/cart', icon: 'cart' },
    { title: this.translateService.get('menu.profile'), url: '/user', icon: 'person' },
  ];
  public categories$ = this.store.select(selectProductCategories);

  constructor(private translateService: TranslateService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(MenuAction.getAllProductCategories())
  }
}
