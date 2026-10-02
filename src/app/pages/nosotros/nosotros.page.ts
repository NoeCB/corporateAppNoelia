import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonSpinner
} from '@ionic/angular';

const oficinaLat = 40.4452;
const oficinaLon = -3.6115;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonSpinner
  ]
})
export class NosotrosPage implements OnInit {

  distancia: number | null = null;
  cargando = false;
  error: string | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  async obtenerPosicion() {
    this.cargando = true;
    this.error = null;
    this.distancia = null;

    try {
      const coords = await this.getPosicionConTimeout(8000);
      this.distancia = this.calcularDistancia(
        coords.latitude, coords.longitude,
        oficinaLat, oficinaLon
      );
      console.log('Posición obtenida:', coords);
      console.log('Distancia a la oficina:', this.distancia, 'km');
      this.cdr.detectChanges();
    } catch (e: any) {
      console.error('Error de geolocalización:', e);
      if (e?.code === 1) {
        this.error = 'Permiso de ubicación denegado. Actívalo en tu navegador.';
      } else if (e?.message === 'TIMEOUT') {
        this.error = 'Tiempo de espera agotado. Inténtalo de nuevo.';
      } else {
        this.error = 'No se pudo obtener la geolocalización.';
      }
      this.cdr.detectChanges();
    } finally {
      this.cargando = false;
    }
  }

  /** Obtiene coordenadas via navigator.geolocation con timeout de seguridad */
  private getPosicionConTimeout(timeoutMs: number): Promise<GeolocationCoordinates> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocalización no soportada en este navegador.'));
        return;
      }

      const timer = setTimeout(() => {
        reject(new Error('TIMEOUT'));
      }, timeoutMs);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(timer);
          resolve(position.coords);
        },
        (err) => {
          clearTimeout(timer);
          reject(err);
        },
        { enableHighAccuracy: false, timeout: timeoutMs - 500, maximumAge: 30000 }
      );
    });
  }

  // Sección 13 — Fórmula Haversine
  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat((R * c).toFixed(2));
  }
}

