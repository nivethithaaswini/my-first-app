import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employees/employee.service';
import { IEmployee } from '../employees/IEmployee';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empService: EmployeeService
  ) { }

  ngOnInit() {
      this.getSingleEmployee();
    }
    employees:IEmployee;
    getSingleEmployee(){
      var id = this.route.snapshot.params['id'];
      this.empService
        .getEmployees(id)
        .subscribe(employee =>{
            this.employees = employee[0];
            // console.log(this.employees = employee);
            })
    };

    goBack(){
      this.router.navigate(['/display']);
    }
  }
