import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPage } from './productos.page';
import { ProductsService } from '../../services/products.service';

describe('ProductosPage', () => {
  let component: ProductosPage;
  let fixture: ComponentFixture<ProductosPage>;

  beforeEach(async () => {
    // Mock del servicio para evitar fetch() real en tests
    const mockProductsService = {
      getProducts: () => Promise.resolve([])
    };

    await TestBed.configureTestingModule({
      imports: [ProductosPage],
      providers: [
        { provide: ProductsService, useValue: mockProductsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
