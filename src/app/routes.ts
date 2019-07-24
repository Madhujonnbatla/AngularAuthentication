import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home/home.component';
import { UserComponent } from './components/user/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { PlanttableComponent } from './components/planttable/planttable/planttable.component';
import { TicketComponent } from './components/ticket/ticket/ticket.component';
import { EngineerComponent } from './components/engineer/engineer/engineer.component';
import { EngineerstableComponent } from './components/engineerstable/engineerstable/engineerstable.component';
import { MachineComponent } from './components/machine/machine/machine.component';
import { MachinetableComponent } from './components/machinetable/machinetable/machinetable.component';
import { PlantComponent } from './components/plant/plant/plant.component';
import{NgModule} from '@angular/core';

 
export const appRoutes: Routes = [
    {path:'planttable',component:PlanttableComponent,canActivate:[AuthGuard]},
    {path:'ticket',component:TicketComponent,canActivate:[AuthGuard]},
    {path:'engineer',component:EngineerComponent,canActivate:[AuthGuard]},
    {path:'engineerstable',component:EngineerstableComponent,canActivate:[AuthGuard]},
    {path:'machine',component:MachineComponent,canActivate:[AuthGuard]},
    {path:'machinetable',component:MachinetableComponent,canActivate:[AuthGuard]},
    {path:'plant',component:PlantComponent,canActivate:[AuthGuard]},
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];
@NgModule({
    imports:[
    RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}