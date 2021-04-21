import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUsers } from 'src/app/users';
import { ViewDetailComponent } from './view-detail/view-detail.component';


@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.css'],
  providers: [ApiService]
})
export class DashboardDetailComponent implements OnInit {

  users: IUsers[];
  viewUser: ViewDetailComponent;
  
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
    this.router.navigate(['/', 'viewUser', data.userName]);
  }
  edit(data) {
    console.log(data.userName)
    this.router.navigate(['/', 'editUser', data.userName]);
  }
}
