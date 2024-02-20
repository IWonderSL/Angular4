import { Component } from '@angular/core';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrl: './show-courses.component.scss'
})
export class ShowCoursesComponent {
  Courses: any[] = [];

  constructor(private courseService: CourseServiceService) {
    this.Courses = this.courseService.getAllCourses();
  }
}
