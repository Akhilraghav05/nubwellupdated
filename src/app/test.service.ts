import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(@Inject(DOCUMENT)private document:Document) {
    const value =  document.cookie;
    console.log(value);
    this.SetUserInfo(value);


   }
  
  
  public SetUserInfo=(data: any)=>{
      console.log(data);
      console.log(data.split(' '));
      
  //  console.log(localStorage.setItem('user-Info',data));
  }    

public GetUserInfo =()=>{

 

  // this.cookieService.get();
  return localStorage.getItem('user-Info');
}
 






}
