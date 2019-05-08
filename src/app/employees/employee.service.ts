import { Injectable } from "@angular/core";
import { IEmployee } from './IEmployee';
import { Http ,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';




@Injectable()
export class EmployeeService{
  constructor(private http:Http){

  }

  getEmployee(): Observable<any>{
    //return this.http.get('./assets/employee.json')
    return this.http.get('http://localhost/selectquery.php/')
    .map((resp:Response) =>
    resp.json());
  }
  addEmployee(info){
    return this.http.post('http://localhost/insert.php/',info);
//    .map(()=>"");
  }

  deleteEmployee(id){
    return this.http.post("http://localhost/delete.php/",{'idee':id});
  //    .map(()=>this.getEmployee());
  }

  updateEmployee(info){
    return this.http.post("http://localhost/update.php/",info)
  .map(()=>"");
  }

  getEmployees(id){
    return this.http.post("http://localhost/selectone.php/",{'id':id})
      .map((resp:Response)=>
      resp.json());
  }
}
