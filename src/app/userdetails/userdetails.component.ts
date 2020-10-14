import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  firstname:string;
  hidepopup:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onuserSubmit(frm : NgForm){
    console.log(frm.value);
    this.hidepopup = false;
  }

  onOkclick(){
    // redirect to thank you page
  }

  onPopupClose(){
    this.hidepopup = true;
  }

}
