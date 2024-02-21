import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildRoutingModule } from './view-child-routing.module';
import { ViewChildComponent } from './view-child.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { ParentViewComponent } from './parent-view/parent-view.component';


@NgModule({
  declarations: [
    ViewChildComponent,
    ChildViewComponent,
    ParentViewComponent
  ],
  exports: [
    ViewChildComponent
  ],
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ]
})
export class ViewChildModule { }
