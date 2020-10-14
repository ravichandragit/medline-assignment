import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:"",component:UserdetailsComponent},
  {path:"thankyou",component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
