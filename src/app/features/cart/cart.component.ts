import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  template: `

      <h1 class="text-3xl font-bold mb-6">Carrello</h1>

      @if(cartService.cartIsEmpty()) {
        <p class="mx-auto text-center">Il carrello è vuoto</p>
      } @else {
        <div class="overflow-x-auto mb-10">
        <table class="table table-zebra">
          <!-- head -->
          <thead>
            <tr>
              <th></th>
              <th>Prodotto</th>
              <th>Costo</th>
              <th class="text-center w-max-10">Cancella</th>
            </tr>
          </thead>
          <tbody>

            @for(item of cartService.cart() ; track item.id; let index = $index) {
              <tr>
                <th>{{index + 1}}</th>
                <td>{{item.title}}</td>
                <td>{{item.price}}</td>
                <td (click)="cartService.removeFromCart(item)" class="text-center cursor-pointer">❌</td>
              </tr>
            }

          </tbody>
        </table>
        </div>
        <div class="flex justify-between items-center gap-4">
            <button class="btn btn-outline" (click)="cartService.clearCart()">❌ Svuota Carrello</button>
            <button class="btn btn-primary">Paga {{cartService.totalCost()}} €</button>
        </div>
      }

  `,
  styles: ``
})
export default class CartComponent {
  cartService = inject(CartService) ;

}
