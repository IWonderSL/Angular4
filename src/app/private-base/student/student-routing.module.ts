import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentComponent,
    children: [
      {
        path: 'addstudent',
        component: AddStudentComponent,
      },
      {
        path: 'showstudent',
        component: ShowStudentsComponent,
      },
      {
        path: 'editstudent',
        component: EditStudentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
