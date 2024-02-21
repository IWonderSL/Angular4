import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestingRoutingModule } from './my-testing-routing.module';
import { MyTestingComponent } from './my-testing.component';
import { InputModule } from './input/input.module';
import { OutputModule } from './output/output.module';
import { ViewChildModule } from './view-child/view-child.module';
import { ViaServiceModule } from './via-service/via-service.module';


@NgModule({
  declarations: [
    MyTestingComponent
  ],
  exports: [
    MyTestingComponent
  ],
  imports: [
    CommonModule,
    MyTestingRoutingModule,
    InputModule,
    OutputModule,
    ViewChildModule,
    ViaServiceModule
  ]
})
export class MyTestingModule { }
