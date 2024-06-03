import { Injectable, computed, inject, signal } from '@angular/core';
import { Product } from '../../models/product';
import { ToastService } from './toast.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  usaHttp : boolean = false;

  httpClient = inject(HttpClient);
  cart = signal<Product[]>([]);
  toastService = inject(ToastService) ;
  itemInCart = computed(() => this.cart().length);
  cartIsEmpty = computed(() => this.itemInCart() === 0);
  totalCost = computed(() => this.cart().reduce((acc, p) => acc + p.price, 0));


  // CAMBIA QUI!!: fe-academy-quarkus
  // Implementare la chiamata al Backend per aggiunta oggetto al carrello
  addToCart(productToAdd: Product) {
    // Controllo se c'è l'elemento in carrello, se non è presente lo aggiungo
    let isInCart = this.cart().some(p => p.id === productToAdd.id) ;
    if (!isInCart) {
      if (!this.usaHttp) {
        this.addToCartAction(productToAdd) ;
      } else {
        this.httpClient.post('xxxxxxxx', productToAdd).subscribe(
          {
            next: cart => {
              this.addToCartAction(productToAdd) ;
            },
            error: () => {
              this.toastService.addToast(`Error while adding ${productToAdd.title} to cart`, 'error') ;
            }
          }
        );
      }
    }
  }

  addToCartAction(productToAdd: Product) {
    this.cart.update(cart => [...cart, productToAdd]);
    this.toastService.addToast(`Added ${productToAdd.title} to cart`, 'success')  ;   
  }

  // CAMBIA QUI!!: fe-academy-quarkus
  // Implementare la chiamata al Backend per rimozione singolo oggetto dal carrello
  removeFromCart(productToRemove: Product) {
    if (!this.usaHttp) {
      this.removeFromCartAction(productToRemove) ;
    } else {
      this.httpClient.delete('xxxxxxxx').subscribe(
        {
          next: cart => {
            this.removeFromCartAction(productToRemove) ;
          },
          error: () => {
            this.toastService.addToast(`Error while removing ${productToRemove.title} from cart`, 'error') ;
          }
        }
      );
    }
  }

  removeFromCartAction(productToRemove: Product) {
    this.cart.update(cart => cart.filter(p => p.id !== productToRemove.id))
  }


  // CAMBIA QUI!!: fe-academy-quarkus
  // Implementare la chiamata al Backend per svuota carrello completo
  clearCart() {
    if(!this.usaHttp) {
      this.clearCartAction() ;
    } else {
      this.httpClient.delete('xxxxxxxx').subscribe(
        {
          next: cart => {
            this.clearCartAction() ;
          },
          error: () => {
            this.toastService.addToast(`Error while clearing cart`, 'error') ;
          }
        }
      );
    } 
  }

  clearCartAction() {
    this.cart.set([]) ;
    this.toastService.addToast(`Cleared cart`, 'info') ;
  }


  // CAMBIA QUI!!: fe-academy-quarkus
  // Implementare la chiamata al Backend per recupero carrello
  getCartFromBackend() {
    this.httpClient.get<Product[]>('xxxxxxxx').subscribe(products => {
      this.cart.set(products)
    })
  }



}
