import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViaServiceComponent } from './via-service/via-service.component';
import { Observer1ViaServiceComponent } from './components/observer1-via-service/observer1-via-service.component';
import { Observer2ViaServiceComponent } from './components/observer2-via-service/observer2-via-service.component';

const routes: Routes = [
  {
    path: 'viaservice',
    component: ViaServiceComponent,
    children: [
      {
        path: 'observer1',
        component: Observer1ViaServiceComponent,
      },
      {
        path: 'observer2',
        component: Observer2ViaServiceComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViaServiceRoutingModule { }
