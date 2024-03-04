import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputRoutingModule } from './output-routing.module';
import { OutputComponent } from './output/output.component';
import { ChildOutputComponent } from './components/child-output/child-output.component';
import { ParentOutputComponent } from './components/parent-output/parent-output.component';


@NgModule({
  declarations: [
    OutputComponent,
    ChildOutputComponent,
    ParentOutputComponent
  ],
  exports: [
    OutputComponent
  ],
  imports: [
    CommonModule,
    OutputRoutingModule
  ]
})
export class OutputModule { }
