import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryDetailPagePage } from './history-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryDetailPagePageRoutingModule {}
