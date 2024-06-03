import { computed, Injectable, signal } from '@angular/core';
import { Config } from '../../models/settings';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  config = signal<Config>({
    title: 'Angular Shop',
    color: '#ffffff',
    enableShop: true
  })

  title = computed(() => this.config().title)
  color = computed(() => this.config().color)
  isShopEnabled = computed(() => this.config().enableShop)


/**
   * Sets the specified property in the config object.
   * @param propName - The name of the property to set.
   * @param value - The value to assign to the property.
   */

  /* versione base con KeyOf
    setConfig(propName: keyof Config, value: any) {
      this.config.update(cfg => ({ ...cfg, [propName]: value }))
    }
  */

  // Versione avanzata con K Extendes che mi permette di tipizzare anche il Value
  setConfig<K extends keyof Config>(propName: K, value: Config[K]) {
    this.config.update(cfg => ({ ...cfg, [propName]: value }))
  }

  setTitle(title: string) {
    this.config.update(cfg => ({ ...cfg, title }))
  }

  setColor(color: string) {
    this.config.update(cfg => ({ ...cfg, color }))
  }

  setEnableShop(enableShop: boolean) {
    this.config.update(cfg => ({ ...cfg, enableShop }))
  }
}

