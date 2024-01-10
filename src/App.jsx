import React, { useState } from 'react'

const App = () => {

  let[counter, setCounter]= useState(5)

  //let counter = 5

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    // console.log("clicked", counter)
  }

   const removeValue = () => {
    setCounter(counter-1)
   }

  return (
    <>
    <h1>Chai Aur React</h1>
    <h2> Counter Value: {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>remove value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App