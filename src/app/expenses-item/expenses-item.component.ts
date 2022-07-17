import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-item',
  templateUrl: './expenses-item.component.html',
  styleUrls: ['./expenses-item.component.css']
})
export class ExpensesItemComponent implements OnInit {

  name: string = "";
  price: number = 0.00;
  typeofpayment: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  

}
