import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrl: './show-students.component.scss'
})
export class ShowStudentsComponent {
  students: any[] = [];

  constructor(private studentService: StudentServiceService) {
    this.students = this.studentService.getAllStudents();
  }

}
