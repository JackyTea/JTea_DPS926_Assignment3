import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryDetailPagePageRoutingModule } from './history-detail-page-routing.module';

import { HistoryDetailPagePage } from './history-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryDetailPagePageRoutingModule
  ],
  declarations: [HistoryDetailPagePage]
})
export class HistoryDetailPagePageModule {}
