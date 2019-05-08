import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees/employee.service';
import {IEmployee} from '../employees/IEmployee';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private empSer:EmployeeService,
    private router:Router) { }

  ngOnInit() {
  }

  model = new IEmployee();

  addEmployee(){
    this.empSer
    .addEmployee(this.model)
    .subscribe(()=>this.display());
  }
  goBack(){
    this.router.navigate(['/']);
  }

  display(){
    this.router.navigate(['/display'])
  }

}
