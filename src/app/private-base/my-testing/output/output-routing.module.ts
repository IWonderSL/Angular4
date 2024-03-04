import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputComponent } from './output/output.component';
import { ChildOutputComponent } from './components/child-output/child-output.component';
import { ParentOutputComponent } from './components/parent-output/parent-output.component';

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
