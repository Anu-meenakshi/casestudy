import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUsers } from 'src/app/users';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: any;
  users: IUsers[];
  user:IUsers;
  id: number;
  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  onSubmit(data) {

    if (this.forgotPasswordForm.valid) {

      this.api.getUserByUserName(data.userName).subscribe(
          (response) => {
            this.users = response;
            this.user =  this.users.find(t=>t.userName === data.userName);
            this.id = this.user.id;
            console.log("id: "+this.id)
            this.api.forgotPasswordUpdate(this.user, this.id, data).subscribe (
              (response) => { }
            );

          },
          (error) => {
            console.log(error);
          }
        );
      
      alert("Password updated!!")
      this.router.navigate(['/login']);

    } else {
      alert('Invalid data!!')
    }


  }
}