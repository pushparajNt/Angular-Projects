import { Component, Input, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  @Input()
  userDetail:user

  constructor() { }

  ngOnInit(): void {
  }

}
