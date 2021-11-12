import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddNewProductPagePageRoutingModule } from './add-new-product-page-routing.module';

import { AddNewProductPagePage } from './add-new-product-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddNewProductPagePageRoutingModule
  ],
  declarations: [AddNewProductPagePage]
})
export class AddNewProductPagePageModule {}
