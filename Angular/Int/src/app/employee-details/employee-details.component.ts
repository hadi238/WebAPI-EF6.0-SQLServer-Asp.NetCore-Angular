import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public empService: EmployeeService, public datepipe:DatePipe,  public toast:ToastrService) { }
@ViewChild(EmployeeFormComponent) emp!:EmployeeFormComponent;


  ngOnInit(){

this.empService.getEmployees().subscribe(data=>{
  this.empService.listEmployee=data;
});


}

populateEmployee(selectedEmployee:Employee)
{
  console.log(selectedEmployee.doj);

let df=this.datepipe.transform(selectedEmployee.doj,'yyyy-MM-dd');
selectedEmployee.doj=df;  
console.log("After Transform:",selectedEmployee.doj);
this.empService.employeeData=selectedEmployee; 


if(this.emp.isSlide==='off')
{
this.emp.hideShowSlide();
}
}


delete(id:number)
{
if(confirm('Are you really want to delete this record?'))
{
  this.empService.deleteEmployee(id).subscribe(data=>{
   console.log('Record deleted...');
    this.empService.getEmployees().subscribe(data=>{
      this.empService.listEmployee=data;
this.toast.error('Sucess','Record Deleted'); 
    });
  },
  err=>{
    console.log('Record not deleted...');

});
}
}
}
