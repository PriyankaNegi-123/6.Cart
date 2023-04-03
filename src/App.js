import React from 'react'
import {useGlobalContext} from './context/context'
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer'

const App = () => {
  return (
    <>
        <Navbar/>
        <CartContainer/>
    </>
  )
}

export default App