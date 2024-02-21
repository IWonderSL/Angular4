import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputComponent } from './output.component';
import { ChildOutputComponent } from './child-output/child-output.component';
import { ParentOutputComponent } from './parent-output/parent-output.component';

const routes: Routes = [
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputRoutingModule { }
