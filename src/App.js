import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import Wallet from './Components/wallet'
import axios from 'axios'



const App = () => {
  const [chain, setChain] = useState()
  const [changeId, setChangeId] = useState()

  useEffect(() => {
    axios
      .get('http://localhost:5000/chain')
      .then(data => {
        setChain(data.data.chain)
        // setChangeId(chain.transactions.recipient)
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
        .catch(error => {
          console.log("Error: ", error)
        })
  }

  console.log(chain)
  return (
    <div className="App">
      <Wallet chain = {chain} setChangeId = {setChangeId} changeId = {changeId} getChain = {getChain}/>
    </div>
  );
}

export default App;
