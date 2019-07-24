import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EngineerService } from 'src/app/shared/Engineer/engineer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {

  engineers:any[];
  Engineer:FormGroup;
    constructor(private EngineerService:EngineerService,private router: Router) { }
  
    ngOnInit() {
      this.getp();
      this.Engineer=new FormGroup({
      
        EngineerId:new FormControl(),
        EngineerName:new FormControl(),
        Email:new FormControl(),
        DOB:new FormControl(),
        language:new FormControl(),
        Address:new FormControl(),
        state:new FormControl(), 
        city:new FormControl(),
         village:new FormControl(), 
        District:new FormControl(),
        Mobile:new FormControl(),
        Country:new FormControl()
        
      });
  
    }
    getp(){
      this.EngineerService.getplants().subscribe((data:[])=>{
        console.log(data);
        this.engineers=data;
      })
    }
    
  Add(){
    this.EngineerService.Addpro(this.Engineer.value).subscribe((result)=>
    {
      console.log(result);
      this.getp();
    },(error)=>{
      console.log(error);
    });
    alert("registered successfully");
  window.location.href="/engineerstable";
    
  }
    Delete(){
   
      this.EngineerService.Deletepro(this.Engineer.value).subscribe((result)=>{
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
      this.EngineerService.Updatepro(this.Engineer.value).subscribe((result)=>{
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
