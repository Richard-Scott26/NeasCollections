import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailPageRoutingModule } from './product-detail-routing.module';

import { ProductDetailPage } from './product-detail.page';
import { ComponentsModule } from 'src/app/Components/Components.module';
import { SharedModules } from 'src/app/Shared/Shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailPageRoutingModule,
    ComponentsModule,
    SharedModules
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
