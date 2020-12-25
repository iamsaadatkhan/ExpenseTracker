import React, { createContext, useReducer } from 'react';
import transactionReducer from './transactionReducer';

const initialTransaction = [
    { desc: 'Cash', amount: 400 },
    { desc: 'Book', amount: -80 },
    { desc: 'Camera', amount: -200 }
]
const transactionContext = createContext(initialTransaction);

const TransactionProvider = ({children }) => {

    let [state, dispatch] = useReducer(transactionReducer, initialTransaction)
    function addTransaction(transObj){
        dispatch({
            type:'ADD' , 
            payload:{
                desc: transObj.desc,
                amount:transObj.amount
                
            },
        })
    }
    return (
        <transactionContext.Provider value={{
            transaction: state,
            addTransaction
        }}>

        </transactionContext.Provider>
    )
}

export default transactionContext;
export {TransactionProvider};
