import React, {useContext} from 'react';
import {TransactionContext} from '../context/transContext.js';

function History() {
    let {Transactions, deleteTransaction} = useContext(TransactionContext);
    return(
        <div className="history">
            <h3>History</h3>

            <ul className="transaction-list">
                {Transactions.map((transObj, ind)=>{
                return(
                    <li key={ind}className={transObj.amount > 0 ? "grouup-listing income" : "grouup-listing expense"}>
                    <i className="delete" onClick={ () => deleteTransaction(transObj)}>X</i>
                    <p>{transObj.desc}</p>
                    <span className="amount">
                        {transObj.amount > 0 ? "" : "-"}
                        ${Math.abs(transObj.amount)}
                    </span>
                    </li>
                )
                })}
                    
            </ul>
        </div>
    )
}

export default History;

