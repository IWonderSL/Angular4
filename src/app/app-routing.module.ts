import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./public-base/public-base.module').then((m) => m.PublicBaseModule),
  },
  {
    path: 'privatebase',
    loadChildren: () =>
      import('./private-base/private-base.module').then((m) => m.PrivateBaseModule),
  },
  {
    path: '*',
    loadChildren: () =>
      import('./public-base/public-base.module').then((m) => m.PublicBaseModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./public-base/public-base.module').then((m) => m.PublicBaseModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }