export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // Apunta a ./home/ porque está dentro de app/home/
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/productos/productos.page').then(m => m.ProductosPage),
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros.page').then(m => m.NosotrosPage),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then(m => m.ContactoPage),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'models',
    loadComponent: () => import('./app/models/models.page').then( m => m.ModelsPage)
  },
];