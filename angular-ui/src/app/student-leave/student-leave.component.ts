import { Component } from '@angular/core';

@Component({
  selector: 'app-student-leave',
  standalone: false,
  templateUrl: './student-leave.component.html',
  styleUrl: './student-leave.component.css'
})
export class StudentLeaveComponent {
  students = [
    {
      enrollmentNumber: '25143',
      studentName: 'Rajdeep Dutt',
      class: 'XII',
      section: 'C',
      reason: 'Fever',
      leaveDate: '21/09 to 12/10',
      status: 'Active'
    },
    // Add more student data as needed
  ];
}
