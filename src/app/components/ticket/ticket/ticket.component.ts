import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TicketService } from 'src/app/shared/ticket/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

 
  Ticket:any[];
  Tickets:FormGroup;
    constructor(private TicketService:TicketService,private router:Router) { }
  
    ngOnInit() {
      this.getp();
      this.Tickets=new FormGroup({
        TicketId:new FormControl(),
        Subject:new FormControl(),
        Des:new FormControl(),
        Email:new FormControl(),
        PlantName:new FormControl()
  
  
      });
  
    }
    getp(){
      this.TicketService.getTicket().subscribe((data:[])=>{
        console.log(data);
        this.Ticket=data;
      })
    }
    
  Add(){
    
  
    this.TicketService.Addpro(this.Tickets.value).subscribe((result)=>
    {
      console.log(result);
      this.getp();
    },(error)=>{
      console.log(error);
    });
    alert(" Email Sent successfully");
  
  }
    Delete(){
   
      this.TicketService.Deletepro(this.Tickets.value).subscribe((result)=>{
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
      this.TicketService.Updatepro(this.Tickets.value).subscribe((result)=>{
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
