import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/users';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  id:any;
  userName: any;
  users: IUsers[];
  user: IUsers;
  editForm:  any;

  constructor(private route: ActivatedRoute, private api : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('id');
    console.log("edit user: "+this.userName);
    this.api.getUserByUserName(this.userName).subscribe(
      (response) => {
        this.users = response;
        this.user = this.users.find(t=>t.userName==this.userName)
        console.log("edit user: "+this.user.firstName);
        this.editForm.patchValue(this.user);
      }
    );
    this.editForm = new FormGroup({
      id: new FormControl(""),
      firstName: new FormControl("", [Validators.pattern('^[a-zA-Z]+$')]),
      lastName: new FormControl("", [Validators.pattern('^[a-zA-Z]+$')]),
      dob: new FormControl(""),
      email: new FormControl("", [Validators.email]),
      addressLine1: new FormControl(""),
      addressLine2: new FormControl(""),
      city: new FormControl("", [Validators.pattern('^[a-zA-Z]+$')]),
      state: new FormControl("", [Validators.pattern('^[a-zA-Z]+$')]),
      country: new FormControl("", [Validators.pattern('^[a-zA-Z]+$')]),
      zipCode: new FormControl(""),
      userName: new FormControl(""),
      password: new FormControl(""),
    });

    
  }
  backToDashboard () {
    this.router.navigate(['/dashboard']);
  }
  onSubmit(data) {
    alert("User Details updated!!")
    console.log("update:" +data.id);
    this.api.getUserByUserName(data.userName).subscribe(
      (response) => {
        this.users = response;
        console.log(response)
        this.user =  this.users.find(t=>t.userName === data.userName);
        console.log("User - firstName: "+this.user.firstName)
        console.log("Data - firstName: "+data.firstName)
        this.api.updateUser(this.user,this.id,data).subscribe (
          (response) => { }
        );

      },
      (error) => {
        console.log(error);
      }
    );
    
    
  }

}
