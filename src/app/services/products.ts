import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    {
      id: 1,
      nombre: 'Producto Ejemplo 1',
      unidades: 50,
      precio: 19.99,
      foto: 'https://via.placeholder.com/80',
      category: 'General'
    },
    {
      id: 2,
      nombre: 'Producto Ejemplo 2',
      unidades: 30,
      precio: 34.99,
      foto: 'https://via.placeholder.com/80',
      category: 'General'
    }
  ];

  constructor() {}

  async getProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return Promise.resolve(this.products.find(p => p.id === id));
  }
}
