import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';

import * as myJson from '../../assets/logins.json';
import { ToastrService } from 'ngx-toastr';
import {TestService}  from '../test.service';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   username: string;
   password: string;
   value:string;
  loginsdata: any;
  cname: string;
  
  constructor(private router:Router,private toastr: ToastrService,
  private  testService:TestService,@Inject(DOCUMENT)private document:Document) {

   }

  ngOnInit() {
    this.loginsdata = myJson['default']['data'];
    console.log(this.loginsdata);
  }
 
    
  login() : any {
    for(let data of this.loginsdata)
    if(this.username == data.usr && this.password == data.pw){
      // this.toastr.success('logged in');
      console.log(this.username);
      console.log(this.password);
      
      this.router.navigate(['table']);
      
    }

    this.function("logindetails",this.username,this.password);
    // this.cookieService.set('userinfo' ,this.username+" "+this.password);
     
       console.log("cookie set successfully");
    // this.testService.SetUserInfo(this.username,this.password);
    // console.log(this.testService.GetUserInfo());
}
 function(ckey:string,...manymore: string[]){ //es6 feautres
  

  document.cookie = ckey+"="+manymore+";"
  this.testService.SetUserInfo(document.cookie)
   
   var x= document.cookie;
   return x;
 }
 


}

