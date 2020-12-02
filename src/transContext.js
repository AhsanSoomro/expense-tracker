import React from "react";
import { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialtransactions = [
    {amount: 500, desc:"Cash"},
    {amount: -100, desc:"Book"},
    {amount: -200, desc:"Camera"},
  ]

export const TransactionContext = createContext(initialtransactions);



export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer, initialtransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount:transObj.amount ,
                cash:transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            Transactions: state,
            addTransaction 
        }}>
            {children}
        </TransactionContext.Provider>
    )
}