import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './common/header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pages from './pages/Pages';
import Data from './components/deals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';



function App() {
  const {productItems}=Data

  const [cartItem, setCardItem]=useState([])
  const addToCart=(product)=>{
    const productExit=cartItem.find((item)=>item.id===product.id)
    if(productExit){
      setCardItem(cartItem.map((item)=>(item.id===product.id ? {...productExit, qty: productExit.qty+1} : item)))
    }else{
      setCardItem([...cartItem, {...product, qty: 1}])
    }
  }
  const decreaseQty=(product)=>{
    const productExit = cartItem.find((item)=>item.id===product.id)
    if(productExit.qty===1){
      setCardItem(cartItem.filter((item)=>item.id!==product.id))
    }else{
      setCardItem(cartItem.map((item)=>(item.id===product.id ? {...productExit,qty :productExit.qty-1}:item)))
    }
  }
  return(
    <>
        <Router>
          <Header cartItem={cartItem}/>
          <Switch>
           <Route path='/' exact >
              <Pages productItems={productItems} addToCart={addToCart}  />
           </Route>
           <Route path='/cart' exact >
              <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
           </Route>
          </Switch>
        </Router>
    </>

  );
  
}





export default App;