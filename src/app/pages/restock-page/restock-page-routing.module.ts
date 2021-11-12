import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestockPagePage } from './restock-page.page';

const routes: Routes = [
  {
    path: '',
    component: RestockPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestockPagePageRoutingModule {}
