import React, { createContext } from 'react';

const initialTransaction = [
    {desc:'Cash' , amount:400},
    {desc:'Book' , amount:-80},
    {desc:'Camera' , amount:-200}
]
const transactionContext = createContext(initialTransaction);

export default transactionContext;
