import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewProductPagePage } from './add-new-product-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewProductPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewProductPagePageRoutingModule {}
