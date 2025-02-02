import React, { useContext } from 'react'
import { GlobalContext } from '../context.js/GlobalState'

function Balance() {
    const {transactions} = useContext(GlobalContext)

    const amount = transactions.map((item)=> (item.amount))
    const total = amount.reduce((acc, item) => (acc += item), 0 ).toFixed(2);

    return (
    <>
    <h4>
        Your Balance
    </h4>
    <h1 id='balance'>
        ${total}
    </h1>
    </>
  )
}

export default Balance
