import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';


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
    FormsModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
