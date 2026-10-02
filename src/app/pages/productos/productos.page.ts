import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge
} from '@ionic/angular';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.interface';

@Component({
  standalone: true,
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  imports: [
    CommonModule,
    DecimalPipe,
    IonHeader, IonToolbar, IonTitle,
    IonButtons, IonBackButton,
    IonContent, IonGrid, IonRow, IonCol,
    IonBadge
  ]
})
export class ProductosPage implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService, private cdr: ChangeDetectorRef) {}

  async ngOnInit() {
    try {
      this.products = await this.productService.getProducts();
      console.log('Productos recibidos:', this.products);
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error al cargar productos:', error);
      this.cdr.detectChanges();
    }
  }

}