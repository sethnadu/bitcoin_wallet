import React, {useState} from 'react';


function Wallet({chain, setChangeId, changeId, getChain}){
    const [values, setValues] = useState({"id": ''})
    const amount = []

    const handleTextChange = name => event => {
        setValues({ ...values, [name]:[event.target.value]});
    };

    const handleSubmit = event => {
        event.preventDefault()
        setChangeId(values.id[0])

    }
    console.log("Current id", changeId)
    console.log("chain", chain)
    console.log("amount", amount)
    return (
        <>
        <form onSubmit = {handleSubmit}>
            <input 
            type ="text"
            name="id"
            value={values.id}
            placeholder="Add ID Here"
            onChange={handleTextChange("id")}

            />
            <button onSubmit = {handleSubmit}>Track</button>
        </form>
        <button onClick = {getChain}>Update Transactions</button>
        <div>
            <h2>Coins in Wallet: </h2>
        </div>
        {chain ? chain.map(block => {
           return block.transactions ? block.transactions.map(transaction => {
                return transaction.recipient == changeId ? 
                (
                <>
                {amount.push(transaction.amount)}
                <div>
                    {transaction.sender != 0 ? <h2>{transaction.sender}</h2> : null}
                    <h2>Recipients Name: {transaction.recipient}</h2>
                    <h2>Coins Recieved: {transaction.amount}</h2>
                </div>
                </>) : null
            }) : null
        }) : null}
        
        
        
        </>
    )
}

export default Wallet