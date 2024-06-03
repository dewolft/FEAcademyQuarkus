import { Component } from '@angular/core';
import { EditorComponent } from './components/editor.component';
import { PreviewComponent } from './components/preview.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [EditorComponent,PreviewComponent],
  template: `
    <h1 class="text-3xl text-center my-6">Settings</h1>
    
    <div class="flex flex-col md:flex-row mx-3">
        <div class="w-full md:w-1/2">
            <app-editor />
        </div>
        <div class="w-full md:w-1/2">
            <app-preview />
        </div>
    </div>
  `,
  styles: ``
})
export default class SettingsComponent {

}
