import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Output2Component } from './output2/output2.component';
import { Child1Output2Component } from './components/child1-output2/child1-output2.component';
import { Child2Output2Component } from './components/child2-output2/child2-output2.component';
import { ParentOutput2Component } from './components/parent-output2/parent-output2.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Output2RoutingModule {}
