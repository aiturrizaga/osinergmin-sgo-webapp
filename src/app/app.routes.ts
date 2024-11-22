import { Routes } from '@angular/router';
import { EnergyConsoleLayout } from '@osinergmin/layout';

export const routes: Routes = [
  {
    path: '',
    component: EnergyConsoleLayout,
    children: [
      {
        path: 'maintenance',
        loadChildren: () => import('./feature/maintenance/maintenance.routes').then(r => r.maintenanceRoutes)
      }
    ]
  }
];
