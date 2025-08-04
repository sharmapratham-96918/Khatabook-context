
import React, { useContext, useEffect, useState } from "react";
import TransactionContext from "../context/TransactionContext";


const Form = ()=>{

   const {dispatch , edit} = useContext(TransactionContext)

   const [text , setText] = useState("")
   const [amount , setAmount] = useState("")

   

const handleSubmit = (e) => {
    e.preventDefault();
   
    !edit.isEdit?
    // Save New Transaction
    dispatch({
        type: "SAVE_TRANSACTION",
        payload:{
            id: crypto.randomUUID(),
            text,
            amount:+amount,
        }
    })
    : dispatch({
        type: "UPDATE_TRANSACTION",
        payload:{
            id: edit?.transactions?.id,
            text,
            amount:+amount,
        }
    })
    setText("");
    setAmount("");

}


useEffect (() => {
    if (edit.isEdit){
        setText(edit?.transactions?.text)
        setAmount(edit?.transactions?.amount)
    }

},[edit])






    return (<div className=" border border-gray-500 p-4 rounded-md">
        <h1 className="text-center text-2xl font-semibold pb-5">Enter Your Transaction</h1>
     <form onSubmit={handleSubmit} >
      <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="w-full border border-emrald-50 p-1 my-1 rounded-sm" placeholder="Enter text"/>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="w-full border border-emrald-50 p-1 my-1 rounded-sm" placeholder="Enter Amount" />
      <button className="bg-amber-500 font-bold w-full p-1 my-2 border rounded-sm cursor-pointer hover:bg-amber-600 transition delay delay-150 duration-150">Submit Transaction</button>
     </form>
    </div>)
}
export default Form;
