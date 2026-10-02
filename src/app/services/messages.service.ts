import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  // Sección 16 — Persistencia local con @capacitor/preferences
  async guardarMensaje(correo: string, mensaje: string): Promise<void> {
    await Preferences.set({
      key: 'ultimoMensaje',
      value: JSON.stringify({
        correo: correo,
        mensaje: mensaje
      })
    });
  }

  async obtenerUltimoMensaje(): Promise<{ correo: string; mensaje: string } | null> {
    const { value } = await Preferences.get({ key: 'ultimoMensaje' });
    return value ? JSON.parse(value) : null;
  }

  async limpiarMensaje(): Promise<void> {
    await Preferences.remove({ key: 'ultimoMensaje' });
  }

}
