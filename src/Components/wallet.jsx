import React, {useState, useEffect} from 'react';


function Wallet({chain, setChangeId, changeId, getChain, total, trans}){
    const [values, setValues] = useState({"id": ''})

    const handleTextChange = name => event => {
        setValues({ ...values, [name]:[event.target.value]});
    };

    const handleSubmit = event => {
        event.preventDefault()
        // getChain()
        setChangeId(values.id[0])
    
    }
    console.log("Current id", changeId)
    console.log("total", total)
    return (
        <>
        <form onSubmit = {handleSubmit} onClick = {getChain}>
            <input 
            type ="text"
            name="id"
            value={values.id}
            placeholder="Add ID Here"
            onChange={handleTextChange("id")}

            />
            <button onSubmit = {handleSubmit} onClick = {getChain}>Track</button>
        </form>
        {/* <button onClick = {getChain}>Update Transactions</button> */}
        <div>
            <h2>Coins in Wallet: {total}</h2>
            <h2>Total Transactions: {trans}</h2>
        </div>
        <div style={{"display": "flex", "flexFlow": "wrap", 'justifyContent': "center"}}>
        {chain ? chain.map(block => {
           return block.transactions ? block.transactions.map(transaction => {
                return transaction.recipient === changeId ? 
                (
                <div>
                <div style ={{"width": "200px", "height": "200px", 'border': "2px solid black", "display": "flex", "justicyContent": "center", "flexDirection": "column", "textAlign": "left", "margin": "20px", "padding": "20px"}}>
                    {transaction.sender != 0 ? <p>Sender: {transaction.sender}</p> : null}
                    <p>Recipients Name: {transaction.recipient}</p>
                    <p>Coins Recieved: {transaction.amount}</p>
                    <p>Time: {block.timestamp}</p>
                </div>
                </div>) : null
            }) : null
        }) : null}
        </div>
        
        
        
        </>
    )
}

export default Wallet