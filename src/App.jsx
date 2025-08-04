import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import {TransactionProvider} from "./context/TransactionContext";
import ListGroup from "./components/ListGroup";

const App = () => {

  return (
    <TransactionProvider>
      <Navbar />
      <div className="p-10 min-h-screen bg-gray-300">
        <Form />
      <Dashboard/>
     <ListGroup />
      </div>

    </TransactionProvider>
  )

}
export default App;
