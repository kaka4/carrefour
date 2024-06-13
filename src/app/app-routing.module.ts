import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

export enum RoutePathEnum {
  CART = 'cart',
  CATEGORY = 'category',
  HOME = 'home'
}

const routes: Routes = [
  {
    path: RoutePathEnum.HOME,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: RoutePathEnum.CART,
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: RoutePathEnum.CATEGORY,
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: '**',
    redirectTo: RoutePathEnum.HOME,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
