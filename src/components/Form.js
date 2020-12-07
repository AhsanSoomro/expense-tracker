import React, { useState } from 'react'
import { useContext } from 'react'
import {TransactionContext} from '../context/transContext.js';


function Form() {
    let {addTransaction} = useContext(TransactionContext);
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

  

  return (
    <div className="form">
        <h3>Add new Transaction</h3>

        <form className="transaction-form" onSubmit={handleAddition}>
        <label>
            Enter Description <br />
            <input value={newDesc} type="text" placeholder="Salary Income" onChange={(ev)=>setDesc(ev.target.value)} required/>
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

export default Form;
