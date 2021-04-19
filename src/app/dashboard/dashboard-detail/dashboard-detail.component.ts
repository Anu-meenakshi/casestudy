import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUsers } from 'src/app/users';
import { ViewUserComponent } from 'src/app/view-user/view-user.component';


@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css'],
  providers: [ApiService]
})
export class DashboardDetailComponent implements OnInit {

  users: IUsers[];
  viewUser: ViewUserComponent;
  
  constructor(private api: ApiService, private router : Router) {  }
  ngOnInit(): void {
    this.api.getAllUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  delete(data) {
    this.api.deleteId(data.id).subscribe(
      (response) => {}
    );
    alert("User Deleted!!")
    this.ngOnInit();
  }

  view(data) {
    console.log(data.userName)
    this.api.getUserByUserName(data.userName).subscribe(
      (response) => {
        let name = response.find(t=>t.userName === data.userName);
        console.log("View: "+name.userName)
        this.viewUser.getUserData(name.userName);
      }
      
    );
    
  }
  
}
