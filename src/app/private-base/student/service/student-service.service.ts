import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  private STORAGE_KEY = 'students';

  constructor() {}

  addStudent(newStudent: Student): void {
    const students: Student[] =
      JSON.parse(localStorage.getItem(this.STORAGE_KEY) as string) || [];

    students.push(newStudent);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(students));
  }

  getAllStudents(): Student[] {
    const studentsString = localStorage.getItem(this.STORAGE_KEY);
    if (!studentsString) {
      return [];
    }

    return JSON.parse(studentsString);
  }

  updateStudent(updatedStudent: Student): void {
    let students: Student[] = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    const index = students.findIndex((student: Student) => student.id === updatedStudent.id);
    if (index !== -1) {
      students[index] = updatedStudent;
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(students));
    }
  }
}
