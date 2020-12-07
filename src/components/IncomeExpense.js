import {useContext} from 'react';
import {TransactionContext} from '../context/transContext.js';
import arrowup from '../images/long-arrow-up.png';
import arrowdown from '../images/long-arrow-down.png';

function IncomeExpense() {
    let {Transactions} = useContext(TransactionContext);
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < Transactions.length; i++) {
          if (Transactions[i].amount > 0)
          income += Transactions[i].amount
        }
        return income;
      }
    
      const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < Transactions.length; i++) {
          if (Transactions[i].amount < 0)
          expense += Transactions[i].amount
        }
        return expense;
      }
    
    return(


      <div className="income-expense">
        <div className="totals">
            <div className="incomenarrow">
                <p><img src={arrowup} alt="arrowup" />INCOME</p>
                <span>${getIncome()}</span>
            </div>
            <div className="expensenarrow">
                <p><img src={arrowdown} alt="arrowdown" />EXPENSE</p>
                <span>${getExpense()}</span>
            </div>
        </div>
        <div className="balance">
            <h3>Overall Balance <span>${getIncome() + getExpense()}</span></h3>
        </div>
      </div>
    )
}

export default IncomeExpense;