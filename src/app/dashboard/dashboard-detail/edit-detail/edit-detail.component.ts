import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/users';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

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

  constructor(private route: ActivatedRoute, private api : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('id');
    console.log("edit user: "+this.userName);
    this.api.getUserByUserName(this.userName).subscribe(
      (response) => {
        this.users = response;
      }
    );
    
  }
  backToDashboard () {
    this.router.navigate(['/dashboard']);
  }
  saveChanges(data) {
    alert("User Details updated")
    console.log("update:" +data.userName);
    this.api.getUserByUserName(data.userName).subscribe(
      (response) => {
        this.users = response;
        this.user =  this.users.find(t=>t.userName === data.userName);
        this.id = this.user.id;
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
    this.router.navigate(['/dashboard']);
  }
}
