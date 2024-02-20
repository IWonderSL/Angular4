import { Injectable } from '@angular/core';
import { Course } from './Course.Mode';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  private STORAGE_KEY = 'courses';

  constructor() {}

  addStudent(newCourse: Course): void {
    const courses: Course[] =
      JSON.parse(localStorage.getItem(this.STORAGE_KEY) as string) || [];

      courses.push(newCourse);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
  }

  getAllCourses(): Course[] {
    // Retrieve the students from local storage
    const coursesString = localStorage.getItem(this.STORAGE_KEY);
    if (!coursesString) {
      return [];
    }

    // Parse the JSON string into an array of students
    return JSON.parse(coursesString);
  }

  updateCourse(updatedCourse: Course): void {
    let courses: Course[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const index = courses.findIndex((course: Course) => course.id === updatedCourse.id);
    if (index !== -1) {
      courses[index] = updatedCourse;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
    }
  }
}
