import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Wallet from './Components/wallet'
import axios from 'axios'



const App = () => {
  const [chain, setChain] = useState()
  const [changeId, setChangeId] = useState("")
  const [total, setTotal] = useState(0)
  const [trans, setTrans] = useState(0)

  useEffect(() => {
    axios
      .get('http://localhost:5000/chain')
      .then(data => {
        setChain(data.data.chain)
        // setChangeId(chain.transactions.recipient)
      })
      .then(() => {
        setTotal(0)
        setTrans(0)
        chain.map(block => {
          block.transactions.map(transaction => {
            if (transaction.recipient === changeId) {
              setTotal(t => t+=Number(transaction.amount))
              setTrans(t => t+=1)
            }
            
          })
        }) 
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }, [])

  const getChain = () => {
      axios
        .get('http://localhost:5000/chain')
        .then(data => {
          console.log("data", data)
          setChain(data.data.chain)
          // setChangeId(chain.transactions.recipient)
        })
        .then(() => {
          setTotal(0)
          setTrans(0)
          chain.map(block => {
            block.transactions.map(transaction => {
              if (transaction.recipient == changeId) {
                setTotal(t => t+= Number(transaction.amount))
                setTrans(t => t+=1)
              }
              
            })
          })
        })
        .catch(error => {
          console.log("Error: ", error)
        })
  }
  console.log(total)
  return (
    <div className="App">
      <Wallet chain = {chain} setChangeId = {setChangeId} changeId = {changeId} getChain = {getChain} total={total} trans = {trans}/>
    </div>
  );
}

export default App;
