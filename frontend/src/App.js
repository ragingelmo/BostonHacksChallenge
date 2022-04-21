import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/hello').then(response => response.json().then(data => {
      console.log("SUCCESS", response)
      setGetMessage(data)
      //return response.json()             //r
    }).catch(error => {
      console.log(error)
    })
    );
  }, [])

  return (
    <>
    <input type = "text"></input>
    <button>Add Todo Item</button>
    <button>Clear Completed Todo</button>
    <div>hey queen</div>
    </>
  )

}

export default App;