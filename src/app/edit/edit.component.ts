import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params, } from '@angular/router';
import { EmployeeService } from '../employees/employee.service';
import { IEmployee } from '../employees/IEmployee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private router:Router,
    private aroute:ActivatedRoute,
    private es: EmployeeService
  ) { }
   model = new IEmployee();

  id = this.aroute.snapshot.params['id'];
  ngOnInit() {
  this.getSingleEmployee();
  }

  getSingleEmployee(){
// console.log(  this.es.getEmployees(this.id).subscribe(employee=>{
//     this.model=employee[0];console.log(this.model)
//   }));
    this.es.getEmployees(this.id).subscribe(employee=>{
      this.model=employee[0];
    })
  };

  updateEmployee(){
    this.es
    .updateEmployee(this.model)
    .subscribe(()=>this.goBack());
  }
  goBack(){
  this.router.navigate(['/display']);
  }

}
