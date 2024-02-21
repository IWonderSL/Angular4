import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestingComponent } from './my-testing.component';
import { InputComponent } from './input/input.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { OutputComponent } from './output/output.component';
import { ChildInputComponent } from './input/child-input/child-input.component';
import { ParentInputComponent } from './input/parent-input/parent-input.component';
import { ChildViewComponent } from './view-child/child-view/child-view.component';
import { ParentViewComponent } from './view-child/parent-view/parent-view.component';
import { ChildOutputComponent } from './output/child-output/child-output.component';
import { ParentOutputComponent } from './output/parent-output/parent-output.component';
import { ViaServiceComponent } from './via-service/via-service.component';
import { Observer1ViaServiceComponent } from './via-service/observer1-via-service/observer1-via-service.component';
import { Observer2ViaServiceComponent } from './via-service/observer2-via-service/observer2-via-service.component';

const routes: Routes = [
  {
    path: '',
    component: MyTestingComponent,
    children: [
      {
        path: 'input',
        component: InputComponent,
        children: [
          {
            path: 'child',
            component: ChildInputComponent,
          },
          {
            path: 'parent',
            component: ParentInputComponent,
          },
        ],
      },
      {
        path: 'viewchild',
        component: ViewChildComponent,
        children: [
          {
            path: 'child',
            component: ChildViewComponent,
          },
          {
            path: 'parent',
            component: ParentViewComponent,
          },
        ],
      },
      {
        path: 'output',
        component: OutputComponent,
        children: [
          {
            path: 'child',
            component: ChildOutputComponent,
          },
          {
            path: 'parent',
            component: ParentOutputComponent,
          },
        ],
      },
      {
        path: 'viaservice',
        component: ViaServiceComponent,
        children: [
          {
            path: 'observer1',
            component: Observer1ViaServiceComponent,
          },
          {
            path: 'observer2',
            component: Observer2ViaServiceComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTestingRoutingModule {}
