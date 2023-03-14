import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes/Routes'
const App = () => {
  const [productItems, setProductItems] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`).then(response => response.json()).then(data => setProductItems(data))
  },[]) 
  
  const[cartItems, setCartItems] = useState([])
  
  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist){
      setCartItems(cartItems.map((item) => item.id === product.id ?
      {...productExist, quantity: productExist.quantity + 1}: item))
    }
    else(
      setCartItems([...cartItems, {...product, quantity: 1}])
    )
  }

  const handleRemoveProduct = (product) =>{
    const productExist = cartItems.find((item) => item.id === product.id)
    if(productExist.quantity === 1) {
      setCartItems(cartItems.filter((item)=>item.id !== product.id))
    }
    else(
      setCartItems(
        cartItems.map((item)=>item.id===product.id ? {...productExist, quantity:productExist.quantity - 1}: item)
      )
    )
  }

  const handleCartClear = () => {
    setCartItems([])
  }
  return(
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Routes productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>
      </Router>
    </div>
  )
}

export default App