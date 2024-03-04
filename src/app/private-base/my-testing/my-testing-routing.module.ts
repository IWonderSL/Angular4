import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTestingComponent } from './my-testing/my-testing.component';
import { InputComponent } from './input/input/input.component';
import { ViewChildComponent } from './view-child/view-child/view-child.component';
import { OutputComponent } from './output/output/output.component';
import { ChildInputComponent } from './input/components/child-input/child-input.component';
import { ParentInputComponent } from './input/components/parent-input/parent-input.component';
import { ChildViewComponent } from './view-child/components/child-view/child-view.component';
import { ParentViewComponent } from './view-child/components/parent-view/parent-view.component';
import { ChildOutputComponent } from './output/components/child-output/child-output.component';
import { ParentOutputComponent } from './output/components/parent-output/parent-output.component';
import { ViaServiceComponent } from './via-service/via-service/via-service.component';
import { Observer1ViaServiceComponent } from './via-service/components/observer1-via-service/observer1-via-service.component';
import { Observer2ViaServiceComponent } from './via-service/components/observer2-via-service/observer2-via-service.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var/template-ref-var.component';
import { ChildTemplateComponent } from './template-ref-var/components/child-template/child-template.component';
import { ParentTemplateComponent } from './template-ref-var/components/parent-template/parent-template.component';
import { Output2Component } from './output2/output2/output2.component';
import { Child1Output2Component } from './output2/components/child1-output2/child1-output2.component';
import { Child2Output2Component } from './output2/components/child2-output2/child2-output2.component';
import { ParentOutput2Component } from './output2/components/parent-output2/parent-output2.component';

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
      {
        path: 'template',
        component: TemplateRefVarComponent,
        children: [
          {
            path: 'child',
            component: ChildTemplateComponent,
          },
          {
            path: 'parent',
            component: ParentTemplateComponent,
          }
        ],
      },
      {
        path: 'output2',
        component: Output2Component,
        children: [
          {
            path: 'child1',
            component: Child1Output2Component,
          },
          {
            path: 'child2',
            component: Child2Output2Component,
          },
          {
            path: 'parent',
            component: ParentOutput2Component,
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
