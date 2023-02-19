import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/ui-models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentId: string | null | undefined;
  student: Student = {
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    mobile: 0,
    genderId: '',
    profileImageUrl: '',
    /*
    gender: {
      id: '',
      description: ''
    },
    */
    address: {
      id: '',
      physicalAddress: '',
      postalAddress: ''
    }
  };

  isNewStudent = false;
  header = '';
  displayProfileImageUrl = '';


  @ViewChild('studentDetailsForm') studentDetailsForm?: NgForm;

  constructor(private readonly studentService: StudentService,
    private readonly route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.studentId = params.get('id');

        if (this.studentId) {
          if (this.studentId.toLowerCase() === 'Add'.toLowerCase()) {
            // -> new Student Functionality
            this.isNewStudent = true;
            this.header = 'Add New Student';
            this.setImage();
          } else {
            // -> Existing Student Functionality
            this.isNewStudent = false;
            this.header = 'Edit Student';
            //Todo
          }
          //GetGenderService
          //Todo

        }
      }
    );
  }

  onUpdate(): void {
    //Todo
  }

  onDelete(): void {
    //Todo
  }

  onAdd(): void {
    //Todo
  }

  uploadImage(event: any): void {
    //Todo
  }

  private setImage(): void {
    //Todo
  }
}
