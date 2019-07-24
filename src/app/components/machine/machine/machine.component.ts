import { Component, OnInit } from '@angular/core';
import { MachineService } from 'src/app/shared/machine/machine.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {

  machine:any[];
Machine: FormGroup;
  constructor(private  MachineService:MachineService,private router: Router) { }
  ngOnInit() {
    this.getp();
    this.Machine=new FormGroup(
      {
        MachineId:new FormControl(),
        MachineName:new FormControl(),
        Machinemodel:new FormControl(),
        MachineLocation:new FormControl()
      }
    );
  
  }
  getp()
  {
    this.MachineService.getplants().subscribe((data:[])=>{
      console.log(data);
      this.machine=data;
  })

}
 
Add(){
  

  this.MachineService.Addpro(this.Machine.value).subscribe((result)=>
  {
    console.log(result);
    this.getp();
  },(error)=>{
    console.log(error);
  });
  alert("registered successfully");
  window.location.href="/machinetable";
}
  Delete(){
 
    this.MachineService.Deletepro(this.Machine.value).subscribe((result)=>{
      console.log(result);
      this.getp();
    },(err) =>{
        console.log(err);
    });

  }

  Update()
  {
    //let p:any={Id:t1,cost:t2,title:t3};
    //alert(t1);
    this.MachineService.Updatepro(this.Machine.value).subscribe((result)=>{
      console.log(result);
      this.getp();
    },(err) =>{
        console.log(err);
    });
  
}
Logout() {
  localStorage.removeItem('userToken');
  this.router.navigate(['/login']);
}

}
