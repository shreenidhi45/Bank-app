import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTransactionComponent } from './Components/admin-transaction/admin-transaction.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PassbookComponent } from './Components/passbook/passbook.component';
import { TransactionComponent } from './Components/transaction/transaction.component';
import { QueriesComponent } from './Components/queries/queries.component';
import { LoginComponent } from './Components/login/login.component';
import { QueriesAdminComponent } from './Components/queries-admin/queries-admin.component';
import { AdminaccountRequestComponent } from './Components/adminaccount-request/adminaccount-request.component';
import { SettingComponent } from './Components/setting/setting.component';
import { AdminCustomerComponent } from './Components/admin-customer/admin-customer.component';
import { ApproveRegisterComponent } from './Components/approve-register/approve-register.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { QueriesSolnComponent } from './Components/queries-soln/queries-soln.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { NewqueryUpdateComponent } from './Components/newquery-update/newquery-update.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { ViewUserComponent } from './Components/view-user/view-user.component';
import { FixedDepositComponent } from './Components/fixed-deposit/fixed-deposit.component';

const routes: Routes = [
  {
    path:'',redirectTo:'contacts/login',pathMatch:'full'
  },
  {
    path:'contacts/login',
    component:LoginComponent
  },
  {
    path:'contacts/userhome/:contactId',
    component:UserHomeComponent
  },
  {
    path:'contacts/updatedquery/:contactId',
    component:NewqueryUpdateComponent
  },

  {
    path:'contacts/adminhome',
    component:AdminHomeComponent
  },
  {
    path:'contacts/querysolution/:contactId',
    component:QueriesSolnComponent
  },
  {
    path:'contacts/registeruser',
    component:RegisterUserComponent
  },
  {
    path:'contacts/adduser',
    component:AddUserComponent
  },
  
  {
    path:'contacts/forgetpass',
    component:ForgetPasswordComponent
  },
  {
    path:'contacts/edituser',
    component:EditUserComponent
  },
  {
    path:'contacts/viewuser/:contactId',
    component:ViewUserComponent
  },
  {
    path:'contacts/queries/:contactId',
    component:QueriesComponent
  },
  {
    path:'contacts/fd/:contactId',
    component:FixedDepositComponent
  },
  {
    path:'contacts/adminaccountreq',
    component:AdminaccountRequestComponent
  },
  {
    path:'contacts/admincustomer',
    component:AdminCustomerComponent
  },
  {
    path:'contacts/adminsetting',
    component:SettingComponent
  },
  {
    path:'contacts/admintransaction',
    component:AdminTransactionComponent
  },
  {
    path:'contacts/adminqueries',
    component:QueriesAdminComponent
  },
  {
    path:'contacts/adminapproveregister/:contactId',
    component:ApproveRegisterComponent
  },
  {
    path:'contacts/transaction/:contactId',
    component:TransactionComponent
  },
  {
    path:'contacts/passbook/:contactId',
    component:PassbookComponent
  },
  { 
    path: '**', 
    component:PageNotFoundComponent 
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
