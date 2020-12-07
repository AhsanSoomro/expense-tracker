import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialtransactions = [
    {amount: 500, desc:"Cash"},
    {amount: -250, desc:"Book"},
    {amount: -200, desc:"Camera"},
  ]

export const TransactionContext = createContext(initialtransactions);

export const TransactionProvider = ({children, className})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialtransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount:transObj.amount ,
                desc:transObj.desc
            },
        })
    }

    function deleteTransaction(transObj){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:transObj
        });
    }

    return(
        <TransactionContext.Provider value={{
            Transactions: state,
            addTransaction, deleteTransaction 
        }}>
            <div className={className}>{children}</div>
        </TransactionContext.Provider>
    )
}