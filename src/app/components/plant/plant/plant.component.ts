import { Component, OnInit } from '@angular/core';
import { PlantService } from 'src/app/shared/plant/plant.service';
import { Plantmodel } from 'src/app/Model/plantmodel/plantmodel';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {

  plants:Plantmodel[];
  plantform:FormGroup;
    constructor(private plantservice:PlantService,private router:Router) { }
  
    ngOnInit() {
      this.getp();
      this.plantform=new FormGroup({
        PlantId:new FormControl(),
        plantName:new FormControl(),
        plantLocation:new FormControl(),
       
      plantType:new FormControl(),
        Address:new FormControl(),
      village:new FormControl(),
    Town:new FormControl(),
    city:new FormControl(),
     District:new FormControl(),
    state:new FormControl(),
       Country:new FormControl()
        
      });
  
    }
    getp(){
      this.plantservice.getplants().subscribe((data:[])=>{
        console.log(data);
        this.plants=data;
      })
    }
    
  Add(){
    
  
    this.plantservice.Addpro(this.plantform.value).subscribe((result)=>
    {
      console.log(result);
      this.getp();
    },(error)=>{
      console.log(error);
    });
    alert("registered successfully");
    window.location.href="/planttable";
  
  }
    Delete(){
   
      this.plantservice.Deletepro(this.plantform.value).subscribe((result)=>{
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
      this.plantservice.Updatepro(this.plantform.value).subscribe((result)=>{
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
