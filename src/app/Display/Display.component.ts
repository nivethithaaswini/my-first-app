import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employees/employee.service';
import { IEmployee } from '../employees/IEmployee';


@Component({
selector:'app-display',
templateUrl:'./Display.component.html',
styles: [`
h3{
  color: green;
}
  `],
  providers : [EmployeeService]

})
export class DisplayComponent implements OnInit{
//items: Array<Item>;
  //clickingaction = '';
    //  OnClicking(){
//this.clickingaction = 'Yes it works!';
//}
employees;


constructor(private es:EmployeeService){
//this.employees =this.es.getEmployee();
}

ngOnInit(){
this.getEmployees();
}
getEmployees(){
  // console.log(this.es.getEmployee().subscribe((data) => console.log(data)));
  this.es.getEmployee().subscribe((data) => this.employees = data);
}

deleteEmployee(id){
      this.es
        .deleteEmployee(id)
        .subscribe(() => {
        this.getEmployees();
      } )
  }
}
