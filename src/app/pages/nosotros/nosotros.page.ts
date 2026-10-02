import { Component, OnInit } from '@angular/core';
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

import { GeolocationService } from '../../services/geolocation.service';

const oficinaLat = 40.4452;
const oficinaLon = -3.6115;

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
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

  constructor(private geoService: GeolocationService) {}

  ngOnInit() {}

  async obtenerPosicion() {
    this.cargando = true;
    this.error = null;
    try {
      const coords = await this.geoService.getCurrentPosition();
      this.distancia = this.calcularDistancia(
        coords.latitude, coords.longitude,
        oficinaLat, oficinaLon
      );
    } catch (e) {
      this.error = 'No se pudo obtener la geolocalización.';
    } finally {
      this.cargando = false;
    }
  }

  // Sección 13 — Fórmula Haversine
  calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
}
