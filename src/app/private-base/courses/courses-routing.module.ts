import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
