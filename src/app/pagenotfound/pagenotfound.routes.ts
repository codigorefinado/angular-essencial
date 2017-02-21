import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
