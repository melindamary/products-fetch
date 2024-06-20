import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'product-app';

}

