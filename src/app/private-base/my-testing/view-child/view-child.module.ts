import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildRoutingModule } from './view-child-routing.module';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildViewComponent } from './components/child-view/child-view.component';
import { ParentViewComponent } from './components/parent-view/parent-view.component';


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
