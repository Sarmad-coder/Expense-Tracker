import "./currentBalance.css"
import { useContext, useState, useEffect } from "react"
import { Transaction } from "../../App"
export default () => {
    let { transaction, setTransaction } = useContext(Transaction)
    let [currentBalance, setCurrentBalance] = useState(0.00);
    useEffect(() => {
        currentBalance=0
        transaction.forEach((data) => {
            currentBalance += +data.amount
        });
        setCurrentBalance(currentBalance)
    }, [transaction])
    


        return <div className="middle">
            <h2 style={{ textTransform: "uppercase" }}>current Balance</h2>
            <h1 style={{ textAlign: "center" }}>${currentBalance}</h1>
        </div>
    }