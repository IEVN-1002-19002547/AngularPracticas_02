import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) { }

  navigateToVentas() {
    this.router.navigate(['/ventas']);
  }

  navigateToGradosCent() {
    this.router.navigate(['/grados-cent']);
  }

  navigateToMultiplicar() {
    this.router.navigate(['/multiplicar']);
  }
}