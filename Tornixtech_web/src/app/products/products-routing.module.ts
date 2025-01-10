import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { CashdashComponent } from './cashdash/cashdash.component';
import { FeedsyComponent } from './feedsy/feedsy.component';
import { GoparadizeComponent } from './goparadize/goparadize.component';
import { KeletickComponent } from './keletick/keletick.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', redirectTo: 'cashdash', pathMatch: 'full' },
      { path: 'cashdash', component: CashdashComponent },
      { path: 'feedsy', component: FeedsyComponent },
      { path: 'goparadize', component: GoparadizeComponent },
      { path: 'keletick', component: KeletickComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {

}
