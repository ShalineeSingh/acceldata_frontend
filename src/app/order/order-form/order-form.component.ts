import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../order-service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.scss"]
})
export class OrderFormComponent implements OnInit {
  button_loader: boolean = false;
  page_loader: boolean = false;
  selectedSalad: string = "No";
  personName: string;
  selectedCheese = 1;
  selectedCutlets = 1;
  numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  cart_list = [];
  constructor(private orderService: OrderService, private router: Router) {}
  ngOnInit() {}
  submitForm() {
    let burger = {
      buns: 2,
      salad: this.selectedSalad,
      cheese: this.selectedCheese,
      cutlets: this.selectedCutlets,
      salesPerson: this.personName
    };
    let price = this.getTotalPrice(burger);
    Object.assign(burger, { price: price });
    this.cart_list.push(burger);
    this.resetPage();
  }
  resetPage() {
    this.selectedSalad = "No";
    this.selectedCheese = 1;
    this.selectedCutlets = 1;
  }
  placeOrder() {
    this.orderService.placeOrder(this.cart_list).subscribe((response: any) => {
      alert("Order Placed successfully");
      this.cart_list = [];
      this.resetPage();
    });
  }
  goToList() {
    this.router.navigate(["/list"]);
  }
  getTotalPrice(burger) {
    // Bun = 2(fix price Rs 5 each bun)
    // salad = yes or no(price Rs 5)
    // Cheese Slices = (Rs 1 per slice)
    // cutlets = (Rs 2 per piece)
    let total = 10;
    if (burger.salad === "Yes") {
      total = total + 5;
    }
    if (burger.cheese) {
      total = total + burger.cheese;
    }
    if (burger.cutlets) {
      total = total + burger.cutlets * 2;
    }
    return total;
  }
}
