import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateBaseRoutingModule } from './private-base-routing.module';
import { PrivateBaseComponent } from './private-base.component';
import { StudentModule } from './student/student.module';
import { CoursesModule } from './courses/courses.module';
import { MyTestingModule } from './my-testing/my-testing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PrivateBaseComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PrivateBaseRoutingModule,
    StudentModule,
    CoursesModule,
    MyTestingModule
  ]
})
export class PrivateBaseModule { }
