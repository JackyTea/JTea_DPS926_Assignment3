import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RestockPagePageRoutingModule } from './restock-page-routing.module';

import { RestockPagePage } from './restock-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RestockPagePageRoutingModule
  ],
  declarations: [RestockPagePage]
})
export class RestockPagePageModule {}
