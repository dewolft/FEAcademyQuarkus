import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar.component';
import { HttpClient } from '@angular/common/http';
import { NotificationComponent } from './core/components/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [HttpClient],
  imports: [RouterOutlet, NavbarComponent, NotificationComponent],
  template: `
    <app-notification></app-notification>
    <app-navbar></app-navbar>
    
    <div class="card max-w-screen-xl m-2 lg:mx-auto shadow-xl p-4">
    <div class="my-5 flex justify-center">
          <div class="w-full">
            <router-outlet />
          </div>
      </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'fe-academy-quarkus';
}
