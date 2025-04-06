import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Barbearia Style - Home'
  },
  { 
    path: 'agendamento', 
    loadComponent: () => import('./components/agendamento-form/agendamento-form.component')
      .then(m => m.AgendamentoFormComponent),
    title: 'Agendamento'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];