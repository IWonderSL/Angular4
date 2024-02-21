import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input.component';
import { ChildInputComponent } from './child-input/child-input.component';
import { ParentInputComponent } from './parent-input/parent-input.component';

const routes: Routes = [
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputRoutingModule { }
