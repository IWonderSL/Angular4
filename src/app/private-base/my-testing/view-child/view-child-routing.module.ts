import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildViewComponent } from './child-view/child-view.component';
import { ViewChildComponent } from './view-child.component';
import { ParentViewComponent } from './parent-view/parent-view.component';

const routes: Routes = [
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule { }
