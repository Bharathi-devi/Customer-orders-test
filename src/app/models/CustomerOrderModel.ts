
export class Customer{ 
    id: number;
    customerName: string;
    companyId: number;
    constructor( id: number, customerName: string, companyId: number){
        this.id=id;
        this.customerName=customerName;
        this.companyId=companyId; 
 }
}

 export class Company {
    id: number;
    companyName: string;
    constructor(id: number, companyName: string){
        this.id=id;
        this.companyName=companyName;
    }
   }

  export  class Order{ 
    id: number;
    custId: number; 
    orderName: string
    constructor(id: number, custId: number, orderName: string){
        this.id=id;
        this.custId=custId;
        this.orderName=orderName;

    }
   }