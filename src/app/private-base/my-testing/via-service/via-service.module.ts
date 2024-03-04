import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViaServiceRoutingModule } from './via-service-routing.module';
import { ViaServiceComponent } from './via-service/via-service.component';
import { Observer1ViaServiceComponent } from './components/observer1-via-service/observer1-via-service.component';
import { Observer2ViaServiceComponent } from './components/observer2-via-service/observer2-via-service.component';


@NgModule({
  declarations: [
    ViaServiceComponent,
    Observer1ViaServiceComponent,
    Observer2ViaServiceComponent
  ],
  exports: [
    ViaServiceComponent
  ],
  imports: [
    CommonModule,
    ViaServiceRoutingModule
  ]
})
export class ViaServiceModule { }
