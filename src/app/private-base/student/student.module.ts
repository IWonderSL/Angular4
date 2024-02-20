import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


@NgModule({
  declarations: [
    StudentComponent,
    AddStudentComponent,
    ShowStudentsComponent,
    EditStudentComponent
  ],
  exports: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
