import { Component } from '@angular/core';
import { IncomeService } from '../../../services/income/income.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {

  incomeForm!: FormGroup;

  incomes: any;

  listOfCategory: any[] = [
    "Salary",
    "Freelancing",
    "Investments",
    "Stocks",
    "Bitcoin",
    "Bank Transfer",
    "Others"
  ];

  constructor(private incomeService: IncomeService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router) {}

  ngOnInit(){
    this.getAllIncomes();
    this.incomeForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  submitForm(){
    this.incomeService.postIncome(this.incomeForm.value).subscribe(res => {
      this.message.success("Income added successfully", {nzDuration: 5000});
      this.getAllIncomes()
    }, error => {
      this.message.error("Error while posting income", {nzDuration: 5000})
    })
  }

  getAllIncomes() {
    this.incomeService.getAllIncome().subscribe(res => {
      this.incomes = res;
    }, error => {
      this.message.error("Error while retrieving incomes", {nzDuration: 5000})
    })
  }

  deleteIncome(id: number){
    this.incomeService.deleteIncome(id).subscribe(res => {
      this.message.success("Income deleted successfully", {nzDuration: 5000});
      this.getAllIncomes();
    }, error => {
      this.message.error("Error while deleting income", {nzDuration: 5000})
    })
  }
}
