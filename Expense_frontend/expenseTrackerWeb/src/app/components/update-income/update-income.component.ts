import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IncomeService } from '../../services/income/income.service';

@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrl: './update-income.component.scss'
})
export class UpdateIncomeComponent {

  incomeForm!: FormGroup;

  listOfCategory: any[] = [
    "Salary",
    "Freelancing",
    "Investments",
    "Stocks",
    "Bitcoin",
    "Bank Transfer",
    "Others"
  ];

  id: number = this.activatedRoute.snapshot.params['id'];

  constructor(private incomeService: IncomeService,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.incomeForm = this.fb.group({
      title: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      category: [null, Validators.required],
      description: [null, Validators.required]
    });
    this.getIncomeByID();
  }

  submitForm() {
    this.incomeService.updateIncome(this.id, this.incomeForm.value).subscribe(res=>{
      this.message.success("Income updated successfully", {nzDuration: 5000});
      this.router.navigateByUrl("/income");
    }, error => {
      this.message.error("Error while updating income", {nzDuration: 5000});
    })
  }

  getIncomeByID(){
    this.incomeService.getIncomeByID(this.id).subscribe(res => {
      this.incomeForm.patchValue(res);
    }, error => {
      this.message.error("Something went wrong", {nzDuration: 5000});
    })
  }

}
