import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

let DATA = [{
  "id": "1",
  "name": "Vishal",
  "contact": "9876543210"
  },
  {
  "id": "2",
  "name": "Manoj Regmi",
  "contact": "8699191896"
  }]

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(){
    return of(DATA);
    // return this.http.get('http://localhost:8080/customers');
  }

  deleteCustomer(id){
    let index = DATA.indexOf(id);
    DATA.splice(index,1);
    return of(DATA);
    // return this.http.delete('http://localhost:8080/customers/'+id);
  }
}
