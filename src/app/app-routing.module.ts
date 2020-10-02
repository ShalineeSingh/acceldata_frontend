import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderComponent } from "./order/order.component";
import { OrderFormComponent } from "./order/order-form/order-form.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
  {
    path: "",
    component: OrderComponent,
    children: [
      {
        path: "",
        component: OrderFormComponent
      },
      {
        path: "list",
        component: OrderListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
