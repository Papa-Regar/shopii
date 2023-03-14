import './App.css';
import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/MyNavbar';
import Main from './Components/Main';
import Cart from './Components/Cart';
import Ads from './Components/Ads';


//BOOTSTRAP INSTALLED

function App() {

  const [cart, setCart]= useState([]);

  const handleClick=(item)=>{
    let isPresent = false;
    cart.map((product)=>{
      if(item.id===product.id)
      isPresent=true;
    })
    if (isPresent)
    return;
    setCart([...cart, item])
  }

  const handleChange=(item, d)=>{
    let ind=-1;
    cart.map((data, index)=>{
      if(data.id===item.id)
      ind=index
    });
    const tempArr=cart;
    tempArr[ind].amount +=d;
    if (tempArr[ind].amount=== 0)
      tempArr[ind].amount=1;
    setCart([...tempArr])
  }

  return (
    <Fragment>
      <MyNavbar size={cart.length} />
      <Ads />
      <Main handleClick={handleClick}/>
      <Cart size={cart.length} cart={cart} setCart={setCart} handleChange={handleChange} />
    </Fragment>
  );
}

export default App;
