import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinComponent } from './medecin/medecin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';g
import { ProfileComponent } from './profile/profile.component';
import { AdminPageComponent } from './Back/admin-page/admin-page.component';
import { TablesMedecinComponent } from './Back/tables-medecin/tables-medecin.component';
import { ChartsComponent } from './Back/charts/charts.component';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: 'medecin', component: MedecinComponent },g
    { path: 'pat

  { path: 'adminPage', component: AdminPageComponent },
  { path: 'TableMedecin', componfent: TablesMedecinComponent },
  { path: 'Charts', component: ChartsComponent },
  { path: 'welcomepage', component: WelcomepageComponent },
  { path: 'admin', component: AdminPageComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile/:email', component: ProfileComponent },


  {path:'forgot-password' , component:ForgotPasswordComponent},
  {path:'reset-password' , component:ResetPasswordComponent},

  { path: '', component: AppComponent },



  { path: '**', redirectTo: '' } // Redirect to home if route not found
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
