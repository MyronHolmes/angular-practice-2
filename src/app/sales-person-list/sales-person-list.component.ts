// Create new componant called Sales Person List: ng generate component sales-person-list       
import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  // create array of objects
  salesPersonList: SalesPerson[]= [
    new SalesPerson("John", "Doe", "johndoe@email.com", 50000),
    new SalesPerson("Jane", "Doe", "janedoe@email.com", 40000),
    new SalesPerson("Jhonny", "Appleseed", "japple@email.com", 30000),
    new SalesPerson("Harry", "Potter", "hp@gmail.com", 9000)
  ]
}
