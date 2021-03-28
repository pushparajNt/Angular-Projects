import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { LayoutCapacity, Room } from 'src/app/Model/Room';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {

  @Input()
  room : Room;
  constructor() { }
   
    
  ngOnInit(): void {

  }

}
