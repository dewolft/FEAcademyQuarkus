// shared/components/variant-icon.componen.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variant-icon',
  standalone: true,
  imports: [],
  template: `
     <svg
       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       class="stroke-current shrink-0 w-6 h-6"
     >
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
               [attr.d]="icons[variant || 'info']">
         </path>
     </svg>
     
  `,
  styles: ``
})
export class VariantIconComponent {
  @Input() variant: 'info' | 'success' | 'error' | undefined;
  icons = {
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
  }
}