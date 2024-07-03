package com.project.ExpenseTracker.services.expense;

import com.project.ExpenseTracker.dto.ExpenseDTO;
import com.project.ExpenseTracker.entity.Expense;

import java.util.List;

public interface ExpenseService {

    Expense postExpense(ExpenseDTO expenseDTO);

    List<Expense> getAllExpenses();

    Expense getExpenseById(Long id);

    Expense updateExpense(Long id, ExpenseDTO dto);

    void deleteExpense(Long id);
}
