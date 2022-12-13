import "./transaction.css"
import { useState, useContext, useEffect } from "react";
import { Transaction } from "../../App";
import M from "materialize-css";
export default ({ edit }) => {


    let [display, setDisplay] = useState("")

    let { transaction, setTransaction } = useContext(Transaction)
    // let [transactionHistory, setTransactionHistory] = useState([]);
    // useEffect(() => {
    //     currentBalance=0
    //     transaction.forEach((data) => {
    //         currentBalance += +data.amount
    //     });
    //     setCurrentBalance(currentBalance)
    // }, [transaction])

    return <>
        <div className="middle" id="transactionDiv">
            <h2>Transaction History</h2>
        </div>
        <div className="middle" id="transactionHistory"


        >
            {transaction.map((item, indux) => {
                if (item.amount.includes("-")) {
                    return <div onMouseMove={
                        () => {
                            setDisplay("show")
                        }

                    }
                        onMouseOut={
                            () => {
                                setDisplay("")
                            }
                        }

                        style={{ position: "relative" }}>
                        <div className="crossbtn" id={display}>
                            <button onClick={
                                () => {
                                    transaction.splice(indux, 1)
                                    setTransaction([...transaction])
                                }
                            }>X</button>

                        </div>

                        <div className="editbtn" id={display}>
                            <button onClick={
                                () => {
                                    item.index = indux
                                    edit.setEdit({ ...item })
                                }
                            } >Edit</button>
                        </div>
                        <div className="minus">

                            <div> {item.discription}</div>
                            <div> {item.amount}</div>

                        </div>
                    </div>
                } else {
                    return <div onMouseMove={
                        () => {
                            setDisplay("show")
                        }

                    }
                        onMouseOut={
                            () => {
                                setDisplay("")
                            }
                        }
                        style={{ position: "relative" }}>
                        <div className="crossbtn" id={display}> <button onClick={
                            () => {
                                transaction.splice(indux, 1)
                                setTransaction([...transaction])
                            }
                        }>X</button>

                        </div>
                        <div className="editbtn" id={display}>
                            <button onClick={
                                () => {
                                    item.index = indux
                                    edit.setEdit({ ...item })
                                }
                            } >Edit</button>
                        </div>
                        <div className="plus">

                            <div> {item.discription}</div>
                            <div> {item.amount}</div>

                        </div>
                    </div>
                }
            })}
            {/* <div style={{ position: "relative" }}>
                <div className="crossbtn" id={display}> <button>X</button></div>
                <div className="plus">

                    <div> hello</div>
                    <div> +$500</div>

                </div>
            </div>

            <div style={{ position: "relative" }}>
                <div className="crossbtn" id={display}> <button>X</button></div>
                <div className="minus">

                    <div> hello</div>
                    <div> -$500</div>

                </div>
            </div> */}
        </div>
    </>

}