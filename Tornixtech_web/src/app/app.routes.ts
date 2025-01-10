import { Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './service_page/services.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TeamComponent } from './team/team.component';
import { PartnersComponent } from './partners/partners.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m=> m.ProductsModule) },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'team', component: TeamComponent },
  { path: 'partners', component: PartnersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
