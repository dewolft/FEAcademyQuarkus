import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal<Product[]>([]) ;
  httpClient = inject(HttpClient);


  // CAMBIA QUI!!: fe-academy-quarkus
  // Gestione recupero prodotti da una API Fittizia
  getProductsFromBackend() {
    console.log('Chiamata API per recupero prodotti') ;
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products').subscribe(products => {
      this.products.set(products)
    })

  }

  constructor() { }
}
