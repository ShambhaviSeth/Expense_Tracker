import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private httpClient : HttpClient) { }

  postIncome(incomeDTO: any): Observable<any> {
    return this.httpClient.post(BASIC_URL + "api/income", incomeDTO);
  }

  getAllIncome(): Observable<any> {
    return this.httpClient.get(BASIC_URL + "api/income/all");
  }

  getIncomeByID(id: number): Observable<any> {
    return this.httpClient.get(BASIC_URL + `api/income/${id}`);
  }

  updateIncome(id: number, incomeDTO: any): Observable<any> {
    return this.httpClient.put(BASIC_URL + `api/income/${id}`, incomeDTO);
  }

  deleteIncome(id: number): Observable<any> {
    return this.httpClient.delete(BASIC_URL + `api/income/${id}`);
  }
}
