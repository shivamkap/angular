import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})

export class CustomerService{
    constructor(private httpdata:HttpClient){}

    addCustomer(customer:any){
        console.log(customer.customerId);
        let input=new FormData();
        input.append("customerFullName",customer.customerFullName);
        input.append("customerEmail",customer.customerEmail);
        input.append("password",customer.password);
        input.append("customerPhoneNumber",customer.customerPhoneNumber);
        input.append("customerAddress",customer.customerAddress);
        input.append("customerZipCode",customer.customerZipCode);
        input.append("customerCity",customer.customerCity);
        input.append("country",customer.country);
        return this.httpdata.post("http://localhost:8099/acceptCustomerDetails",input);
    }

    getAllCustomerDetails(){
        return this.httpdata.get("http://localhost:8099/getAllCustomerDetails");
    }

    getCustomerDetails(custId:any){
        console.log(custId);
        return this.httpdata.get("http://localhost:8099/getCustomerDetails/"+custId);

    }

    deleteCustomerDetails(custId:any){
        
        return this.httpdata.delete("http://localhost:8099/deleteCustomer/"+custId);
    }

    updateCustomerDetails(custId:any,customer:any){
        
    }
}