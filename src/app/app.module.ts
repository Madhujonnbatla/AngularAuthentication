import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/user/sign-in/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home/home.component';
import { UserComponent } from './components/user/user/user.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { EngineerComponent } from './components/engineer/engineer/engineer.component';
import { EngineerstableComponent } from './components/engineerstable/engineerstable/engineerstable.component';
import { MachineComponent } from './components/machine/machine/machine.component';
import { MachinetableComponent } from './components/machinetable/machinetable/machinetable.component';
import { PlantComponent } from './components/plant/plant/plant.component';
import { PlanttableComponent } from './components/planttable/planttable/planttable.component';
import { TicketComponent } from './components/ticket/ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent,
    EngineerComponent,
    EngineerstableComponent,
    MachineComponent,
    MachinetableComponent,
    PlantComponent,
    PlanttableComponent,
    TicketComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
