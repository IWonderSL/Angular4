import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { ShowCoursesComponent } from './components/show-courses/show-courses.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    AddCourseComponent,
    ShowCoursesComponent,
    EditCourseComponent
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
