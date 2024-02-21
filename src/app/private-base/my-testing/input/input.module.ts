import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ParentInputComponent } from './parent-input/parent-input.component';


@NgModule({
  declarations: [
    InputComponent,
    ChildInputComponent,
    ParentInputComponent
  ],
  exports: [
    InputComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule
  ]
})
export class InputModule { }
