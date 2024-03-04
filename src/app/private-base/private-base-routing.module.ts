import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateBaseComponent } from './private-base/private-base.component';
import { StudentComponent } from './student/student/student.component';
import { CoursesComponent } from './courses/courses/courses.component';
import { AddStudentComponent } from './student/components/add-student/add-student.component';
import { ShowStudentsComponent } from './student/components/show-students/show-students.component';
import { EditStudentComponent } from './student/components/edit-student/edit-student.component';
import { AddCourseComponent } from './courses/components/add-course/add-course.component';
import { ShowCoursesComponent } from './courses/components/show-courses/show-courses.component';
import { EditCourseComponent } from './courses/components/edit-course/edit-course.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateBaseComponent,
    children: [
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
      {
        path: 'courses',
        component: CoursesComponent,
        children: [
          {
            path: 'addcourse',
            component: AddCourseComponent,
          },
          {
            path: 'showcourses',
            component: ShowCoursesComponent,
          },
          {
            path: 'editcourse',
            component: EditCourseComponent,
          },
        ],
      },
      {
        path: 'testing',
        loadChildren: () =>
          import('./my-testing/my-testing.module').then(
            (m) => m.MyTestingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateBaseRoutingModule {}
