import { Injectable } from '@angular/core';
import {Customer, Company, Order} from './models/CustomerOrderModel'
import { Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  private customers: Customer[] =

        [

            new Customer(1, "Bill Gates", 11),

            new Customer(2, "James Cook", 22),

            new Customer(3, "Peter Nash", 33),

            new Customer(4, "Anash Kumar", 44),

        ]

 

        private companies: Company[] =

        [

            new Company(11, "Microsoft"),

            new Company(22, "Google"),

            new Company(33, "Facebook"),

            new Company(44, "Oracle"),

        ]

 

    private orders: Order[] =

        [

            new Order(1, 1, "Microsoft Order 1"),

            new Order(2, 1, "Microsoft Order 2"),

            new Order(3, 1, "Microsoft Order 3"),

            new Order(4, 2, "Google Order 1"),

            new Order(5, 2, "Google Order 2"),

            new Order(6, 2, "Google Order 3"),

            new Order(7, 3, "Facebook Order 1"),

            new Order(8, 3, "Facebook Order 2"),

            new Order(9, 3, "Facebook Order 3"),

            new Order(10, 4, "Oracle Order 1"),

        ]

 

    loading$: Observable<boolean>;

    customers$: Observable<Customer[]>;

 

    loadCustomers() {

        this.loading$ = of(true);


        setTimeout(() => {

            this.customers$ = of(this.customers);

            this.loading$ = of(false);

        }, 2000);

    }

 

    getCustomer(custId: number): Observable<Customer> {
         
        const customer = this.customers.find(x=> x.id == custId);
        return of(customer);

    }

 

    getCompany(companyId: number): Observable<Company> {

        const company = this.companies.find(x=> x.id == companyId);
        return of(company);

    }

 

    getOrders(custId: number): Observable<Order[]> {
        const orders = this.orders.filter(x => x.custId === custId);
        return of(orders);

    }
   
}
