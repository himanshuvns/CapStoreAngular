import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MerchantComponent } from './merchant/merchant.component';
import { InventoryComponent } from './inventory/inventory.component';
const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'merchant',component:MerchantComponent},
  {path:'inventory',component:InventoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
