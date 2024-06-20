import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CategorizedProducts } from '../../models/categorized-products.interface';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  categorizedProducts:any = {};

  async getData(){
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json();
    const products = data.products;
    this.categorizedProducts = this.categorizeProducts(products);
    console.log(this.categorizedProducts[0])
  
  }


  categorizeProducts(products: Product[]): any{

    const categories: { [key: string]: Product[] } = {};
    products.forEach(product => {
      const category = product.category;
      if(!categories[category]){
        categories[category] = [];
      }
      categories[category].push(product);
    });
    // return categories;
    return Object.keys(categories).map(category => ({
      category,
      products: categories[category]
    }));
  }

  ngOnInit() {
    this.getData();
  }
}




