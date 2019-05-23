import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers = [];
  filteredCustomers = [];
  allCustomers: boolean = false;
  searchCustomers: boolean = false;
  deleteCustomers: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe((data)=>{
      this.customers = data;
      this.filteredCustomers = data;
    })
  }

  allCustomerShow(){
    this.allCustomers = true;
    this.searchCustomers = false;
    this.deleteCustomers = false;
  }

  searchCustomerShow(){
    this.searchCustomers = true;
    this.allCustomers = false;
    this.deleteCustomers = false;
  }

  deleteCustomerShow(){
    this.searchCustomers = false;
    this.allCustomers = false;
    this.deleteCustomers = true;
  }

  filterCustomers(key){
    this.filteredCustomers = this.customers.filter((data)=>{
      return (data.name.toLowerCase().indexOf(key.toLowerCase()) != -1)
    })
  }

  deleteCustomer(id){
    this.customerService.deleteCustomer(id).subscribe(()=>{
      console.log('Deleted');
    })
  }

}
