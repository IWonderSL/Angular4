import { Component } from '@angular/core';
import { Course } from '../Course.Mode';
import { CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.scss'
})
export class EditCourseComponent {

  courses: Course[] = [];
  isEditing: boolean = false;
  editingCourse: Course = { id: 0, name: '', price: 0 };

  constructor(private courseService: CourseServiceService) {
    this.courses = this.courseService.getAllCourses();
  }

  editCourse(student: Course) {
    this.isEditing = true;
    this.editingCourse = { ...student }; // Clone the student object to avoid modifying the original
  }

  saveEditedCourse() {
    if (this.editingCourse) {
      this.courseService.updateCourse(this.editingCourse);
      this.isEditing = false;
      this.courses = this.courseService.getAllCourses(); // Update the students array with the updated student details
    }
  }


}
