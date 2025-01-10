import { Component } from '@angular/core';

@Component({
  selector: 'app-cashdash',
  standalone: true,
  imports: [],
  templateUrl: './cashdash.component.html',
  styleUrl: './cashdash.component.css'
})
export class CashdashComponent {
  constructor() {
    console.log('CashdashComponent loaded');
  }
}
