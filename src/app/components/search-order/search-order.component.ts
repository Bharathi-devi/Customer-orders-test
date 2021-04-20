import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Observable, of, forkJoin } from 'rxjs';
import { combineLatest } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators'
import { Customer, Company, Order } from '../../models/CustomerOrderModel'

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {

  customerId: number;
  showDetails: boolean = false;
  result$ = {
    custname: '',
    compname: '',
    orders: [],
  };
  error:string;
  constructor(public service: CustomerService) { }

  ngOnInit(): void {}

  onSubmit() {
    if (this.customerId) {
      this.customerId = Number(this.customerId);
      //Fetch data 
      forkJoin([this.service.getCustomer(this.customerId), this.service.getOrders(this.customerId)]).pipe(
        map(([customer, orders]) => {
          if(customer){
          this.result$.custname = customer.customerName;
          this.result$.orders = orders;
          this.showDetails=true;
          this.error='';
          }
          else{
            this.error="No Data Available"
          }
          return customer;
          
        }),
        mergeMap(customer => this.service.getCompany(customer.companyId))
      ).subscribe(company => this.result$.compname = company.companyName,
        error => this.showDetails = false)

    }
  }

}