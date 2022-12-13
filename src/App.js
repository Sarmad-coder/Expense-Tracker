import React, { createContext, useState } from "react";
import "./App.css"
import CurrentBalance from "./components/current balance/currentBalance";
import Income from "./components/income/income";
import TransactionHistory from "./components/transaction history/transactionHistory";
import AddTransaction from "./components/add transaction/addTransaction";
let Transaction = createContext([])
function App() {
  let [transaction, setTransaction] = useState([])

  let [edit,setEdit]=useState({})
  return (<>
    <p>Expense Tracker by Sarmad Awan</p>
    <Transaction.Provider value={{ transaction, setTransaction }}>
      <CurrentBalance />
      <Income />
      <TransactionHistory edit={{edit,setEdit}} />
      <AddTransaction edit={{edit,setEdit}} />
    </Transaction.Provider>
  </>

  );
}

export default App;
export {Transaction}
