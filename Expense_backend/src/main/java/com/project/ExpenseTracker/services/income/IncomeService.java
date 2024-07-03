package com.project.ExpenseTracker.services.income;


import com.project.ExpenseTracker.dto.IncomeDTO;
import com.project.ExpenseTracker.entity.Income;

import java.util.List;

public interface IncomeService {
    Income postIncome(IncomeDTO incomeDTO);
    List<IncomeDTO> getAllIncomes();
    Income updateIncome(Long id, IncomeDTO incomeDTO);
    IncomeDTO getIncomeById(Long id);
    void deleteIncome(Long id);
}
