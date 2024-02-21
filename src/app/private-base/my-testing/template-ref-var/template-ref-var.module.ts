import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRefVarRoutingModule } from './template-ref-var-routing.module';
import { TemplateRefVarComponent } from './template-ref-var.component';
import { ChildTemplateComponent } from './child-template/child-template.component';
import { ParentTemplateComponent } from './parent-template/parent-template.component';


@NgModule({
  declarations: [
    TemplateRefVarComponent,
    ChildTemplateComponent,
    ParentTemplateComponent
  ],
  exports: [
    TemplateRefVarComponent
  ],
  imports: [
    CommonModule,
    TemplateRefVarRoutingModule
  ]
})
export class TemplateRefVarModule { }
