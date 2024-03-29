import { Component, OnInit } from '@angular/core';
import { Usermodel } from 'src/app/shared/usermodel';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:Usermodel
  UserRegistration:NgForm
  emailPattern="^[a-z0-9._+#@-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor( private UserService:UserService ,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?:NgForm)
{
  if(form!=null)
  form.reset();
  
    this.user={
      UserName:'',
      Password:'',
      Email:'',
      FirstName:'',
      LastName:'',
    
     
    }

    }
    OnSubmit(form: NgForm) {
      this.UserService.registerUser(form.value)
        .subscribe((data: any) => {
          if (data.Succeeded == true) {
            this.resetForm(form);
            this.toastr.success('User registration successful');
          }
          else
          this.toastr.error(data.Errors[0]);
        
        });
    }

}
