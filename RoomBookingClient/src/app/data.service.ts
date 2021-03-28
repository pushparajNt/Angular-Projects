import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Layout, LayoutCapacity, Room } from './Model/Room';
import {user} from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private rooms: Array<Room>;
private users:Array<user>;

getRooms(): Observable<Array<Room>>
{
  return of (this.rooms);
}
getUsers():Observable<Array<user>>
{
  return of(this.users);
}
  constructor() {
    this.rooms = new Array<Room>();

    const room1 = new Room();
    room1.id=1;
    room1.name = 'First Room';
    room1.location = 'First Floor';

    const capacity1 = new LayoutCapacity();
    capacity1.layout = Layout.THEATER;
    capacity1.capacity = 50;

    const capacity2 = new LayoutCapacity();
    capacity2.layout = Layout.USHAPE;
    capacity2.capacity = 20;

    room1.capacities.push(capacity1);
    room1.capacities.push(capacity2);

    const room2 = new Room();
    room2.id=2;
    room2.name = 'Second Room';
    room2.location = 'second Floor';
    
    const capacity3 = new LayoutCapacity();
    capacity3.layout = Layout.THEATER;
    capacity3.capacity = 60;

    room2.capacities.push(capacity3);

   
    const room3 = new Room();
    room3.id=3
    room3.name = 'Third  Room';
    room3.location = 'Third Floor';
   

    const capacity4 = new LayoutCapacity();
    capacity4.layout = Layout.THEATER;
    capacity4.capacity = 60;

    room3.capacities.push(capacity4);

    this.rooms.push(room1);
    this.rooms.push(room2);
    this.rooms.push(room3);
        
    this.users=new Array<user>();

    const user1=new user();
    user1.id=1;
    user1.name="Pushparaj";

    const user2=new user();
    user2.id=2;
    user2.name="Nirmal Kumar";

    const user3=new user();
    user3.id=3;
    user3.name="Anbu";

    const user4=new user();
    user4.id=4;
    user4.name="Vignesha varadhan";

    const user5=new user();
    user5.id=5;
    user5.name="Guru";

    
    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);
    this.users.push(user4);
    this.users.push(user5);
    
  }  
}
