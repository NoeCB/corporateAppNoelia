import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
  IonLabel
} from '@ionic/angular';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonItem, IonInput, IonTextarea,
    IonButton

  ]
})
export class ContactoPage implements OnInit {

  // Sección 15 — Forms
  correo = '';
  mensaje = '';
  enviado = false;

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {}

  // Sección 16 — Persistencia con @capacitor/preferences
  async enviar() {
    if (!this.correo || !this.mensaje) return;

    await this.messagesService.guardarMensaje(this.correo, this.mensaje);

    this.correo = '';
    this.mensaje = '';
    this.enviado = true;

    setTimeout(() => (this.enviado = false), 3000);
  }
}
