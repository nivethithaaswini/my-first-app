import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
//import { Http } from '@angular/http';
import { IEmployee } from './IEmployee';


//export type Item = { id: number, fname: string,lname:string,salary:number,dob:string };
@Component({
selector:'employee',
templateUrl:'./employee.component.html',
styles: [`
h3{
  color: green;
}
  `],
  providers : [EmployeeService]

})
export class EmployeeComponent implements OnInit{
//items: Array<Item>;
  //clickingaction = '';
    //  OnClicking(){
//this.clickingaction = 'Yes it works!';
//}
employees:IEmployee[]=null;

constructor(private es:EmployeeService){
//this.employees =this.es.getEmployee();
}

ngOnInit(){
this.es.getEmployee().subscribe((data) => this.employees = data);
}
  }
