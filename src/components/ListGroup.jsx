import React, { useContext } from "react";
import TransactionContext from "../context/TransactionContext";
import Listitems from "./Listitems";

const ListGroup = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <ul className="my-4 p-4">
      {transactions.map((transaction) => (
        <Listitems key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default ListGroup;
