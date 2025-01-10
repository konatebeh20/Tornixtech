import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import { CashdashComponent } from './cashdash/cashdash.component';
import { FeedsyComponent } from './feedsy/feedsy.component';
import { GoparadizeComponent } from './goparadize/goparadize.component';
import { KeletickComponent } from './keletick/keletick.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductsComponent,
    CashdashComponent,
    FeedsyComponent,
    GoparadizeComponent,
    KeletickComponent,
  ]
})
export class ProductsModule {
  constructor() {
    console.log('ProductsModule chargé avec succès');
  }
 }
