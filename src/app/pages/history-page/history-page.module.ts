import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPagePageRoutingModule } from './history-page-routing.module';

import { HistoryPagePage } from './history-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPagePageRoutingModule
  ],
  declarations: [HistoryPagePage]
})
export class HistoryPagePageModule {}
