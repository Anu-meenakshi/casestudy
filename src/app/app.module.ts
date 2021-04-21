import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationDetailComponent } from './registration/registration-detail/registration-detail.component';
import { LoginDetailComponent } from './login/login-detail/login-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailComponent } from './dashboard/dashboard-detail/view-detail/view-detail.component';
import { EditDetailComponent } from './dashboard/dashboard-detail/edit-detail/edit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDetailComponent,
    LoginDetailComponent,
    ForgotPasswordComponent,
    DashboardDetailComponent,
    ViewDetailComponent,
    EditDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'register', component: RegistrationDetailComponent},
      { path: 'login', component: LoginDetailComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
      { path: 'dashboard', component: DashboardDetailComponent },
      { path: 'viewUser/:id', component: ViewDetailComponent },
      { path: 'editUser/:id', component: EditDetailComponent },
      { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
