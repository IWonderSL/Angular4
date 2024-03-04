import { Component } from '@angular/core';
import { StudentServiceService } from '../../service/student-service.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  students: Student[] = [];
  isEditing: boolean = false;
  editingStudent: Student = { id: 0, name: '', age: 0 };

  constructor(private studentService: StudentServiceService) {
    this.students = this.studentService.getAllStudents();
  }

  editStudent(student: Student) {
    this.isEditing = true;
    this.editingStudent = { ...student };
  }

  saveEditedStudent() {
    if (this.editingStudent) {
      this.studentService.updateStudent(this.editingStudent);
      this.isEditing = false;
      this.students = this.studentService.getAllStudents();
    }
  }

  
  

}
