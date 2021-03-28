import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomdetailComponent } from './admin/rooms/roomdetail/roomdetail.component';
import { RoomsComponent } from './admin/rooms/rooms.component';
import { UsersComponent } from './admin/users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {path:'',component:UsersComponent},
  {path:'admin/users',component:UsersComponent},
  {path:'admin/rooms',component:RoomsComponent},
  {path:'calender',component:CalenderComponent},
  // {path:'admin/rooms/roomdetail/:id',component:RoomdetailComponent},
  {path:'404',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
