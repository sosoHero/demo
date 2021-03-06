import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppComponent } from './components/app/app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { State } from './services/state';
import { ClaimsComponent } from './views/claims/claims.component';
import { LogoutComponent } from './views/logout/logout.component';
import { BootstrapValidationStyleDirective } from './directives/bootstrap-validation-style.directive';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { ChartService } from './services/chart.service';
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    ClaimsComponent,
    LogoutComponent,
    BootstrapValidationStyleDirective,
    ValidationErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [
    AccountService,
    AuthService,
    ChartService,
    State
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
