import "./income.css"
import { useContext, useState, useEffect } from "react";
import { Transaction } from "../../App";
export default () => {
    let { transaction, setTransaction } = useContext(Transaction)
    let [income, setIncome] = useState(0)
    let [expense, setExpense] = useState(0)
    useEffect(() => {
        income=0;
        expense=0;
        transaction.forEach(data => {
            if (data.amount.includes("-")) {
               let num=data.amount.replace("-","")

                expense += +num
            } else {
                income += +data.amount
            }
        });
        setIncome(income)
        setExpense(expense)
    }, [transaction])

    return <div className="middle" id="incomeDiv">
        <div className="inline_Block">
            <h3>INCOME</h3>
            <h3 style={{ fontSize: "1.5em", color: "#b6960a", textAlign: "center" }}>{income}</h3>
        </div>
        <div className="inline_Block incomeLine">
        </div>
        <div className="inline_Block">
            <h3>EXPENSE</h3>
            <h3 style={{ fontSize: "1.5em", color: "#2da3ad", textAlign: "center" }}>{expense}</h3>
        </div>

    </div>
}