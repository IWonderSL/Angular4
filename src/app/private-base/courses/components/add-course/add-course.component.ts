import { Component } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  courseName = '';
  coursePrice = '';
  showAlert = false;

  courses: Course[] = [];

  constructor(private courseService: CourseServiceService) { }

  submitForm() {
    const newCourse: Course = {
      id: Math.random(), // Generate a random ID for the new Course
      name: this.courseName,
      price: parseInt(this.coursePrice, 10)
    };
    
    this.courseService.addCourse(newCourse);
  
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  
    this.courseName = '';
    this.coursePrice = '';

    this.courses = this.courseService.getAllCourses();
  }
}
