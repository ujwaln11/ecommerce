import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Home from '../Home/Home'
import SingleProduct from '../SingleProduct/SingleProduct'

const Routes = (props) => {
  return (
    <div>
        <Switch>
            <Route path='/' exact>
                 <Home/>
            </Route>
            <Route path='/products' exact>
                 <Products productItems={props.productItems} handleAddProduct={props.handleAddProduct}/>
            </Route>
            <Route path='/cart' exact>
                 <Cart cartItems={props.cartItems} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear}/>
            </Route>
            <Route path='/products/:id'>
               <SingleProduct productItems={props.productItems} handleAddProduct={props.handleAddProduct}/>
            </Route>
        </Switch>
    </div>
  )
}

export default Routes