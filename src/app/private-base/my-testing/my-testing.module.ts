import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestingRoutingModule } from './my-testing-routing.module';
import { MyTestingComponent } from './my-testing/my-testing.component';
import { InputModule } from './input/input.module';
import { OutputModule } from './output/output.module';
import { ViewChildModule } from './view-child/view-child.module';
import { ViaServiceModule } from './via-service/via-service.module';
import { TemplateRefVarModule } from './template-ref-var/template-ref-var.module';
import { Output2Module } from './output2/output2.module';


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
    ViaServiceModule,
    TemplateRefVarModule,
    Output2Module
  ]
})
export class MyTestingModule { }
