// features/home/home.component.ts
import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { SettingsService } from '../../core/services/settings.service';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
      <div class="flex flex-wrap  gap-6 justify-center">
        @for (product of this.productService.products(); track product.id) {
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="flex items-center justify-center h-48 overflow-hidden">
                  <img class=" object-cover" [src]="product.image" [alt]="product.title" />
                </figure>
                <div class="card-body">
                    <div class="flex justify-between">
                      <h2 
                        class="card-title line-clamp-1"
                        [style.color]="settingsService.config().color"
                      >{{product.title}}</h2>
                    </div>
                    <p class="line-clamp-2 mb-6">
                      {{product.description}}
                    </p>
                    <div class="flex items-center card-actions justify-between">
                      <div class="card-title">€ {{product.price}}</div>
                        @if (settingsService.isShopEnabled()) {
                            <button
                              class="btn btn-primary"
                              (click)="cartService.addToCart(product)"
                            >
                                Add to Cart
                            </button>
                        }
                    </div>
                </div>
            </div>
        }
      </div>
  `,
  styles: `

  `
})
export default class HomeComponent implements OnInit {

  cartService = inject(CartService);
  settingsService = inject(SettingsService);
  productService = inject(ProductService);



  ngOnInit(): void {
    // Avvio recupero prodotti da Server Web
    this.productService.getProductsFromBackend() ;
    this.cartService.getCartFromBackend();
    
  }

}

