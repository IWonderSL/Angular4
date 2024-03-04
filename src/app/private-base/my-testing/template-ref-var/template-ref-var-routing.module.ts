import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { ChildTemplateComponent } from './components/child-template/child-template.component';
import { ParentTemplateComponent } from './components/parent-template/parent-template.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRefVarRoutingModule { }
