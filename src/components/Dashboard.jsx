
import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

const Dashboard = () => {

const {transactions} = useContext(TransactionContext);


 const income = transactions
 .filter((transaction)=> transaction.amount > 0)
 .reduce((p , c) => p + c.amount, 0);

 const expense = transactions
 .filter((transaction)=> transaction.amount < 0)
 .reduce((p , c) =>  p + c.amount, 0); 


const balance = transactions.reduce((p , c) => p + c.amount , 0 )










    return (<div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
        <div className="bg-green-600 p-5 text-white rounded-md ">
            <h2 className="text-lg font-semibold "> Total Income</h2>
            <h3 className="text-3xl font-bold">{income}</h3>
        </div>
        <div className="bg-red-600 p-5 text-white rounded-md">
            <h2 className="text-lg font-semibold ">Total Expenses</h2>
            <h3 className="text-3xl font-bold">{expense}</h3>
        </div>
        <div className="bg-yellow-400 p-5 text-white rounded-md">
            <h2 className="text-lg font-semibold ">Total Balance</h2>
            <h3 className="text-3xl font-bold">{balance}</h3>
        </div>
    </div>
    )

}
export default Dashboard;
