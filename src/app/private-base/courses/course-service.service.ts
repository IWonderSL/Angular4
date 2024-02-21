import { Injectable } from '@angular/core';
import { Course } from './Course.Mode';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  private STORAGE_KEY = 'courses';

  constructor() {}

  addCourse(newCourse: Course): void {
    const courses: Course[] =
      JSON.parse(localStorage.getItem(this.STORAGE_KEY) as string) || [];

      courses.push(newCourse);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(courses));
  }

  getAllCourses(): Course[] {
    
    const coursesString = localStorage.getItem(this.STORAGE_KEY);
    if (!coursesString) {
      return [];
    }

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
