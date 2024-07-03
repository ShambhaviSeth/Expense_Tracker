import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense/expense.service';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

  expenseForm! : FormGroup;

  listOfCategory: any[] = [
    "Education",
    "Groceries",
    "Health",
    "Subscription",
    "Takeaways",
    "Clothing",
    "Travelling",
    "Others"
  ];

  expenses: any;

  constructor(private fb: FormBuilder,
    private expenseService: ExpenseService,
    private message: NzMessageService,
    private router: Router) {}

  ngOnInit(){
    this.getAllExpenses();
    this.expenseForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  submitForm(){
    this.expenseService.postExpense(this.expenseForm.value).subscribe(res => {
      this.message.success("Expense posted successfully", {nzDuration:5000});
    }, error => {
      this.message.error("Error while posting expense", {nzDuration:5000});
    });
  }

  getAllExpenses(){
    this.expenseService.getAllExpenses().subscribe(res => {
      this.expenses = res;
    })
  }

  deleteExpense(id: number){
    this.expenseService.deleteExpense(id).subscribe(res => {
      this.message.success("Expense deleted successfully", {nzDuration: 5000});
      this.getAllExpenses();
    }, error => {
      this.message.error("Error while deleting expense", {nzDuration: 5000});
    })
  }

  updateExpense(id: number) {
    this.router.navigateByUrl(`/expense/${id}/edit`)
  }

}
