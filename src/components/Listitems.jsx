import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TransactionContext from "../context/TransactionContext";

const Listitems = ({ transaction }) => {
  const { dispatch } = useContext(TransactionContext);

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: transaction.id,
    });
  };

  const handleEdit = () => {
    dispatch({
      type: "EDIT_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <li
      className={`relative my-1 border border-gray-500 rounded-md p-4 ${
        transaction.amount > 0 ? "bg-green-200" : "bg-red-200"
      }`}
    >
      <h1 className="text-xl font-semibold">{transaction.amount}</h1>
      <p className="text-sm font-semibold">{transaction.text}</p>
      <div className="absolute top-3 right-5 flex gap-1">
        <button
          onClick={handleEdit}
          className="py-0.5 px-2 rounded-md hover:bg-yellow-100"
        >
          <FaEdit className="text-yellow-600" />
        </button>
        <button
          onClick={handleRemove}
          className="py-0.5 px-2 rounded-md hover:bg-red-100"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </li>
  );
};

export default Listitems;
