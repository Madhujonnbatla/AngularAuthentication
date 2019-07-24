import { Component, OnInit } from '@angular/core';
import { EngineerService } from 'src/app/shared/Engineer/engineer.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineerstable',
  templateUrl: './engineerstable.component.html',
  styleUrls: ['./engineerstable.component.css']
})
export class EngineerstableComponent implements OnInit {

 
  engineers:any[];
  engineer: FormGroup;
    constructor(private  EngineerService:EngineerService,private router: Router) { }
    ngOnInit() {
      this.getp();
      this.engineer=new FormGroup(
        {
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
        }
      );
    
    }
    getp()
    {
      this.EngineerService.getplants().subscribe((data:[])=>{
        console.log(data);
        this.engineers=data;
    })
  
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

}
