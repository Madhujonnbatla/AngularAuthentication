import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TicketService } from 'src/app/shared/ticket/ticket.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;
  Ticket:any[];
  Tickets:FormGroup;
 
  constructor(private router: Router, private userService: UserService,private TicketService:TicketService) { }
 
  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    });
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
  
 
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
