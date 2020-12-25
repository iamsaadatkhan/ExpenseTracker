import React, { useContext } from 'react';
import transactionContext from './transactionContext'

const Child = () => {
   let {transaction} = useContext(transactionContext)

    return (


        <div className='container'>
            <h1 className='text-center'>Expense Tracker</h1>

            <h3 className='balance-display'>Your Balance <br /> $260 </h3>

            <div className='expense-container'>
                <h3>INCOME <br /> $500</h3>
                <h3>EXPENSE <br /> $240</h3>
            </div>
            <div>
                <h3>History</h3>
                <hr className='hr' />
            </div>
            <div>
                <ul className='transaction-list'>
                    {transaction.map((transObj , ind)=>{
                        return(<li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                            
                        </li>)
                    })}
               
                </ul>
            </div>
            <div>
                <h3>Add new Transaction</h3>
                <hr className='hr' />
                <form className='transaction-form'>
                    <label>Enter Description</label>
                    <br />
                    <input type='text' placeholder='Enter transaction details' required ></input>
                    <br />
                    <label>Enter Amount</label>

                    <br />
                    <input type='number' placeholder='Enter Amount' required ></input>
                    <br />
                    <input type='submit' value='Add Transaction' />
                </form>
            </div>
        </div>
    )

}

export default Child;