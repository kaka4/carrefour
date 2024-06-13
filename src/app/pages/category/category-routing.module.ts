import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoryPage} from './category.page';

const routes: Routes = [
  {
    path: ':categoryId',
    component: CategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
