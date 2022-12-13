import { useEffect } from "react";
import "./addTransaction.css"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { Transaction } from "../../App";
import { v4 } from "uuid";
export default ({ edit }) => {

    let { transaction, setTransaction } = useContext(Transaction)
    let { handleSubmit, register, reset } = useForm()

    useEffect(() => {        
        if (edit.edit.id) {
            reset(edit.edit)
        }else{
            reset()
            
        }
    }, [edit.edit])
    
    console.log(edit)

    const makeTransaction = (data) => {
        // e.prevntDefault
        if (edit.edit.id) {
          let index=edit.edit.index
            transaction[index] = data
            setTransaction([...transaction])
            edit.setEdit({})
            reset({})           
        } else {
            data.id = v4()
            transaction.push(data)
            setTransaction([...transaction])
            reset()
        }      
    }

    return <div className="middle" >
        <h2 id="transactionDiv">Add New Transaction</h2>

        <form onSubmit={handleSubmit(makeTransaction)}>
            <div>
                <label>Discription</label>
                <input {...register("discription")} type="text" placeholder="Details of Transaction" id="discription" />
            </div>
            <div>
                <label>Transaction Amount</label>
                <input {...register("amount")} type="text" placeholder="Details of Transaction" id="discription" />
            </div>
            {edit.edit.id==undefined&&<button>Add Transaction</button>}
            {edit.edit.id&&<button>Edit</button>}
        </form>
    </div>
}