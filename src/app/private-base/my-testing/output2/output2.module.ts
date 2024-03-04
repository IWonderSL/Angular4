import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Output2RoutingModule } from './output2-routing.module';
import { Output2Component } from './output2/output2.component';
import { Child1Output2Component } from './components/child1-output2/child1-output2.component';
import { Child2Output2Component } from './components/child2-output2/child2-output2.component';
import { ParentOutput2Component } from './components/parent-output2/parent-output2.component';


@NgModule({
  declarations: [
    Output2Component,
    Child1Output2Component,
    Child2Output2Component,
    ParentOutput2Component
  ],
  exports: [
    Output2Component
  ],
  imports: [
    CommonModule,
    Output2RoutingModule
  ]
})
export class Output2Module { }
