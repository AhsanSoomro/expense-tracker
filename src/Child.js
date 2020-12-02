import React, { useState } from 'react'
import { useContext } from 'react'
import {TransactionContext} from './transContext';


function Child() {
  let {Transactions, addTransaction} = useContext(TransactionContext);
  let [newDesc, setDesc] = useState("");
  let [newAmount, setAmount] = useState("0");


  const handleAddition = (event) => {
    event.preventDefault();
    if(Number(newAmount) == 0){
      alert("Please Enter Correct Value")
        return false;
      }
    addTransaction({
      amount: Number(newAmount),
      desc: newDesc,
    });

    setDesc('');
    setAmount(0);
  }

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

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>

      <h3>Your Balance<br /> {getIncome() + getExpense()}</h3>

      <div className="expense-container">
        <h3>INCOME <br />{getIncome()}</h3>
        <h3>EXPENSE <br />{getExpense()}</h3>
      </div>

      <h3>History</h3>
      <hr />

      <ul className="transaction-list">
        {Transactions.map((transObj, ind)=>{
          return(
            <li key={ind}>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          )
        })}
            
      </ul>

      <h3>Add new Transaction</h3>
      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <label>
          Enter Description <br />
          <input value={newDesc} type="text" onChange={(ev)=>setDesc(ev.target.value)} required/>
        </label>

        <br />
        <label>
          Enter Amount <br />
          <input value={newAmount} type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
        </label>

        <br />
        <input type="submit" value ="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
