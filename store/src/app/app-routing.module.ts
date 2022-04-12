import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';

const routes: Routes = [
  { path:'',  loadChildren:() => import("./products/products.module").then(m => m.ProductsModule) }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
