import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUsers } from 'src/app/users';

@Component({
  selector: 'app-login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.css']
})
export class LoginDetailComponent implements OnInit {

  loginForm:any;
  users: IUsers[];
  
  constructor(private router: Router, private api : ApiService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName:new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }
  onSubmit(data){
    if(this.loginForm.valid){
      this.api.validateLogin(data.userName,data.password).subscribe(
        (response) => {
          this.users = response;
          console.log(this.users);
        },
        (error) => {
          console.log(error);
        }
      );
      if(this.users) {
        this.router.navigate(['/dashboard']);  
      }
      else {
        alert('Invalid Credentials!!')
      }
    } else {
      alert('Invalid Credentials!!')
    }
    
  }

}
