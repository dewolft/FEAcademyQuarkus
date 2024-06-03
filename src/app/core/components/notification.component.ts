import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { VariantIconComponent } from './variant-icon.component';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, VariantIconComponent],
  template: `
  @if (toastService.toastPresent()) {
    <div class="toast toast-top toast-end z-50">
      @for(toast of toastService.toasts(); track toast.id) {        
          <div class="alert" [class.alert-info]="toast.type === 'info'" [class.alert-success]="toast.type === 'success'" [class.alert-error]="toast.type === 'error'">
           <app-variant-icon [variant]="toast.type" />
            <span>{{toast.message}}</span>
          </div>
      }
    </div>
  }
  `,
  styles: ``
})
export class NotificationComponent {
  toastService = inject(ToastService);

}