import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IUsers } from 'src/app/users';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  id:any;
  userName: any;
  users: IUsers[];

  constructor(private route: ActivatedRoute, private api : ApiService, private router : Router) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('id');
    console.log("view user: "+this.userName);
    this.api.getUserByUserName(this.userName).subscribe(
      (response) => {
        this.users = response;
      }
      
    );
  }
  backToDashboard () {
    this.router.navigate(['/dashboard']);
  }

  
}
