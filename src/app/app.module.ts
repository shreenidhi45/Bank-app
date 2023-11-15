import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { AdminTransactionComponent } from './Components/admin-transaction/admin-transaction.component';
import { AdminaccountRequestComponent } from './Components/adminaccount-request/adminaccount-request.component';
import { AdminCustomerComponent } from './Components/admin-customer/admin-customer.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { ApproveRegisterComponent } from './Components/approve-register/approve-register.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { FullViewComponent } from './Components/full-view/full-view.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NewqueryUpdateComponent } from './Components/newquery-update/newquery-update.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PassbookComponent } from './Components/passbook/passbook.component';
import { QueriesComponent } from './Components/queries/queries.component';
import { QueriesAdminComponent } from './Components/queries-admin/queries-admin.component';
import { QueriesSolnComponent } from './Components/queries-soln/queries-soln.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SuccessComponent } from './Components/success/success.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingComponent } from './Components/setting/setting.component';
import { FixedDepositComponent } from './Components/fixed-deposit/fixed-deposit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AdminTransactionComponent,
    AdminaccountRequestComponent,
    AdminCustomerComponent,
    AdminHomeComponent,
    ApproveRegisterComponent,
    EditUserComponent,
    ForgetPasswordComponent,
    FullViewComponent,
    LoginComponent,
    NavbarComponent,
    NewqueryUpdateComponent,
    PageNotFoundComponent,
    PassbookComponent,
    QueriesComponent,
    QueriesAdminComponent,
    QueriesSolnComponent,
    RegisterUserComponent,
    SpinnerComponent,
    SuccessComponent,
    TransactionComponent,
    UserHomeComponent,
    ViewUserComponent,
    SettingComponent,
    FixedDepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
