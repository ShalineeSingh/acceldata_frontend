import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "../order-service";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"]
})
export class OrderListComponent implements OnInit {
  page_loader: boolean = true;
  order_list = [];
  personName: string;
  searched: boolean = false;
  total_price: number;
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.getOrderList();
  }
  getOrderList() {
    this.page_loader = true;
    this.orderService
      .getOrderList()
      .subscribe((response: any) => {
        this.order_list = response;
      })
      .add(() => (this.page_loader = false));
  }
  goToOrders() {
    this.router.navigate(["/"]);
  }
  searchOrders() {
    this.searched = true;
    this.orderService
      .searchOrders(this.personName)
      .subscribe((response: any) => {
        this.order_list = response;
        if (this.order_list && this.order_list.length) {
          this.total_price = this.order_list.reduce(
            (accum, item) => accum + item.price,
            0
          );
        }
      });
  }
}
