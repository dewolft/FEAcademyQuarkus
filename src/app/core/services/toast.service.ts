import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = signal<ToastMessage[]>([]);
  toastPresent = computed(() => this.toasts().length > 0);

  addToast(message: string , type: 'info' | 'success' | 'error' | undefined) {
    const id = Date.now();
    const toast : ToastMessage = { id: id, type: type, message: message };
    this.toasts.update(m => [...m, toast]);
    this.removeToastAfterTimeout(id);
  }

  removeToastAfterTimeout(id : number) {
    setTimeout(() => {
      this.toasts.update(m => m.filter(t => t.id !== id));
    }, 3000);
  }
}

export interface ToastMessage {
  type : 'info' | 'success' | 'error' | undefined ;
  id : number;
  message: string;

}
