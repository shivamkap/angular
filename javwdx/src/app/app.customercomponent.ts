import {Component,OnInit} from '@angular/core';
import {CustomerService} from './app.customerService';

@Component({
    selector:'customer-func',
    templateUrl:'customer.functions.html'
})

export class CustomerFunctions{
    constructor(private custservice:CustomerService){}
    customerId:any;
    customer:any=[];
    customerone:any;
    addCustomer():any{
        this.custservice.addCustomer(this.customer).subscribe((customer)=>this.customer.customerId);
        alert("Sucessfully added and customerId is"+this.customer.customerId);
    }

    getCustomerDetails():any{
        this.custservice.getCustomerDetails(this.customerId).subscribe((data:any)=>this.customerone=data);
    }

    getAllCustomerDetails():any{
        this.custservice.getAllCustomerDetails().subscribe((data:any)=>this.customer=data)
    }

    deleteCustomer():any{
        this.custservice.deleteCustomerDetails(this.customerId).subscribe();
        alert("Customer is deleted");
        
    }
}