
import { createContext , useReducer, useState } from "react";
import { TransactionReducer } from "./transactionReducer";

const TransactionContext = createContext ()

export const TransactionProvider =({children})=>{

 const initaialState = {
  transactions: [{id:1 , text: " i am from reducer" , amount:9999}],
  edit:{transactions:{}, isEdit:false},
 }

const [state , dispatch] =  useReducer (TransactionReducer, initaialState)

    return (
        <TransactionContext.Provider value = {{
          transactions : state.transactions,
          edit:state.edit,
          dispatch,
        }}>
            {children}

            </TransactionContext.Provider>

    )
}




export default TransactionContext
