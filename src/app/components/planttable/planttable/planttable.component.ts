import { Component, OnInit } from '@angular/core';
import { Plantmodel } from 'src/app/Model/plantmodel/plantmodel';
import { FormGroup } from '@angular/forms';
import { PlantService } from 'src/app/shared/plant/plant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planttable',
  templateUrl: './planttable.component.html',
  styleUrls: ['./planttable.component.css']
})
export class PlanttableComponent implements OnInit {

 

  Plants:Plantmodel[];
  plantform:FormGroup;

  constructor(private plantservice:PlantService,private router:Router) { }

  ngOnInit() {
    this.getp();
    
  }
  getp(){
    this.plantservice.getplants().subscribe((data:[])=>{
      console.log(data);
      this.Plants=data;
      })
    }
     
      Delete(){
 
        this.plantservice.Deletepro(this.plantform.value).subscribe((result)=>{
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
