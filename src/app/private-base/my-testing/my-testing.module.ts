import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTestingRoutingModule } from './my-testing-routing.module';
import { MyTestingComponent } from './my-testing.component';


@NgModule({
  declarations: [
    MyTestingComponent
  ],
  exports: [
    MyTestingComponent
  ],
  imports: [
    CommonModule,
    MyTestingRoutingModule
  ]
})
export class MyTestingModule { }
