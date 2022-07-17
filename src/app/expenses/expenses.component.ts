import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }


  addExpense(): void {

  }

  showForm(): void {
    this.visible = true;
  }

  hideForm(): void {
    this.visible = false;
  }
}
