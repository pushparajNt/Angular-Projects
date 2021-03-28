import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/Model/Room';
 import {DataService} from '../../data.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {


  rooms: Array<Room>;
  selectedRoom: Room;

  constructor(private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.dataService.getRooms().subscribe(
      data=>{this.rooms=data;}
    );
    // console.log(this.dataService.rooms);
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        const id=params['id'];
        if(id)
        {
          this.getRoom(+id);
        }
      }
    )
    console.log(this.dataService.getRooms());
     }

  getRoom(id:number)
  {
    this.selectedRoom=this.rooms.find(room=> room.id===id);
    this.router.navigate(['admin','rooms'],{queryParams:{id:+id}});
  }


}
