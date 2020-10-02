import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  placeOrder(body: any): Observable<any> {
    return this.httpClient.post("http://localhost:3000/api/order", body);
  }
  getOrderList(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/api/list/all");
  }
  searchOrders(q_params: any): Observable<any> {
    return this.httpClient.get("http://localhost:3000/api/search", {
      params: { name: q_params }
    });
  }
}
