import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerPagePageRoutingModule } from './manager-page-routing.module';

import { ManagerPagePage } from './manager-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerPagePageRoutingModule
  ],
  declarations: [ManagerPagePage]
})
export class ManagerPagePageModule {}
