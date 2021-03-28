import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Array<user>;
  selectedUser:user;

  constructor(private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
     this.dataService.getUsers().subscribe(
       data=>this.users=data
     );
     this.activatedRoute.queryParams.subscribe(
       (params)=>{
         const id=params['id'];
         if(id)
         {
           this.getUser(+id);
         }
       }
     )

  }

  getUser(id:number)
   {
    this.selectedUser=this.users.find(user=>user.id===id);
     this.router.navigate(['admin','users'],{queryParams:{id:+id}});
  }

}
