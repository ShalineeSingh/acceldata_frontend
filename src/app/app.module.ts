import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DndModule } from "ng2-dnd";
import bootstrap from "bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgSelectModule } from "@ng-select/ng-select";
import { DatepickerModule, BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { OrderComponent } from "./order/order.component";
import { OrderFormComponent } from "./order/order-form/order-form.component";
import { OrderListComponent } from "./order-list/order-list.component";

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderFormComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    BrowserAnimationsModule,
    DndModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
