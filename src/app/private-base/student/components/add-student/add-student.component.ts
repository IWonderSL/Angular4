import { Component } from '@angular/core';
import { StudentServiceService } from '../../service/student-service.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  studentName = '';
  studentAge = '';
  showAlert = false;

  students: Student[] = [];

  constructor(private studentService: StudentServiceService) { }

  submitForm() {
    const newStudent: Student = {
      id: Math.random(), 
      name: this.studentName,
      age: parseInt(this.studentAge, 10)
    };
    
    this.studentService.addStudent(newStudent);
  
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  
    this.studentName = '';
    this.studentAge = '';

    this.students = this.studentService.getAllStudents();

  }
  

}
