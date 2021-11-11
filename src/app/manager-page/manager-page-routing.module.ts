import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerPagePage } from './manager-page.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerPagePageRoutingModule {}
