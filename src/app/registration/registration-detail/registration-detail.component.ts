import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUsers } from 'src/app/users';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styleUrls: ['./registration-detail.component.css']
})
export class RegistrationDetailComponent implements OnInit {
  userForm: any;
  date: Date = new Date();
  user: IUsers;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      dob: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      addressLine1: new FormControl(""),
      addressLine2: new FormControl(""),
      city: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      state: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      country: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      zipCode: new FormControl("", [Validators.required]),
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      reEnterPassword: new FormControl("", [Validators.required])
    });

  }


  onSubmit(data: IUsers) {
    console.log(data)
    if (this.userForm.valid) {
      alert('Registration successful!!')
      this.api.saveUser(data).subscribe(
        (response) => {
         // this.api.getAllUsers();
        },
        (error) => { }
      );
      this.router.navigate(['/dashboard']);

    } else {
      alert('Required fields arent filled!!')
    }
  }

}
