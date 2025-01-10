import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { TeamComponent } from "../team/team.component";
import { ProductsComponent } from "../products/products.component";
import { PartnersComponent } from "../partners/partners.component";
import { ServicesComponent } from '../service_page/services.component';
import { Router, RouterLink } from '@angular/router';
// import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, 
    TestimonialComponent,
    TeamComponent, 
    ProductsComponent, 
    PartnersComponent, 
    ServicesComponent, 
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  clients = [
    { img: 'assets/img/clients/client-1.png', alt: 'Client 1' },
    { img: 'assets/img/clients/client-2.png', alt: 'Client 2' },
    { img: 'assets/img/clients/client-3.png', alt: 'Client 3' },
    { img: 'assets/img/clients/client-4.png', alt: 'Client 4' },
    { img: 'assets/img/clients/client-5.png', alt: 'Client 5' },
    { img: 'assets/img/clients/client-6.png', alt: 'Client 6' }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  navigateToKeletick() {
    this.router.navigate(['/products/keletick']);
  }

  navigateToCashdash() {
    this.router.navigate(['/products/cashdash']);
  }

  navigateToGoparadize() {
    this.router.navigate(['/products/goparadize']);
  }

  navigateToFeedsy() {
    this.router.navigate(['/products/feedsy']);
  }

}
