import { Routes } from '@angular/router';

export const routes: Routes = [
  {

    path: '',
    // Tú decides: 'home', 'inicio' o 'parenterales'
    redirectTo: 'home', 
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'parenterales',
    loadComponent: () => import('./page/parenterales/parenterales.page').then(m => m.ParenteralesPage)

  },
  {
    path: 'intramuscular',
    loadComponent: () => import('./page/intramuscular/intramuscular.page').then(m => m.IntramuscularPage)
  },

  {
    path: 'inicio',
    loadComponent: () => import('./page/inicio/inicio.page').then(m => m.InicioPage)

  }
];
export const appRoutes: Routes = [
  {

    path: 'parenterales',
    loadComponent: () => import('./page/parenterales/parenterales.page').then( m => m.ParenteralesPage)
  },
  {
    path: 'intradermica',
    loadComponent: () => import('./page/intradermica/intradermica.page').then( m => m.IntradermicaPage)
  },
  {
    path: 'intravenosa',
    loadComponent: () => import('./page/intravenosa/intravenosa.page').then( m => m.IntravenosaPage)
  },
];

