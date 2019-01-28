import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import  {TestService} from '../test.service';
import {MatDialog, MatDialogConfig, MatPaginator} from '@angular/material';
import  { DialogComponent} from '../dialog/dialog.component';
import { DOCUMENT } from '@angular/common';
import {MatTableDataSource} from '@angular/material';
import { Validators, FormControl, FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  

  newarray: any;
  value: string;
  viewValue: string;
 
  receiverId: any;
  userdetails: any;
  dialogvalue: any;
  users:any;
  
  selectedValue:string;
  dataSourceAddUser: MatTableDataSource<{}>;
  addNewUser: { Id: number; Name: any; Age: any; Email: any; Surname: any; }[];
  newrow: any;
  // sourceip: FormControl;
  myGroup: FormGroup;
  constructor( private router: Router,
    private testService:TestService,
    public dialog: MatDialog,@Inject(DOCUMENT) private document: Document,private fb: FormBuilder) {
      this.users = new Array();
     }

  ngOnInit() {

    this.dataSourceAddUser = new MatTableDataSource();
   
    let emailFormat = "/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/";
    this.myGroup = new FormGroup({
      sourceip : new FormControl("", Validators.compose([Validators.required, Validators.pattern(emailFormat)])),
     destinationip :new FormControl("", Validators.compose([Validators.required, Validators.pattern(emailFormat)]))
   });




  }
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  
  addFieldValue() {
     this.newarray = this.fieldArray.push(this.newAttribute)
    // var mywish = this.newarray.unshift();
    this.newAttribute = {};
    console.log(this.newarray);
      
  
  }


  deleteFieldValue(index: number) {
    this.fieldArray.splice(index, 1);
  }
 
  
  del() {
    const dialogConfig = new MatDialogConfig();
    
    let dialogRef = this.dialog.open(DialogComponent,dialogConfig)
     
  
     dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.dialogvalue = result;

  });

  document.cookie = this.testService.GetUserInfo()
   console.log(document.cookie);
  //  let emailFormat = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
    // this.cookieService.delete('user-Info');
    
    // this.myGroup = new FormGroup({
    //   sourceip : new FormControl("", Validators.compose([Validators.required, Validators.pattern(emailFormat)]))
     
  
    





    setTimeout(()=>{
  this.router.navigate(['login'])
}, 9000); 
   
}


  displayedColumns = ['position', 'name', 'weight', 'symbol','extra','Action'];
  displayedColumnsAddUser: string[] = ['position', 'name', 'weight', 'symbol', 'extra', 'Action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}


  const ELEMENT_DATA: Element[] = [
    {name: '',position:1, weight:'' , symbol:'', extra:'',Action:''},
    ];





export interface Element {
  name: string;
  position:number;
  weight: string;
  symbol: string;
  extra :string;
  Action:string;

}
