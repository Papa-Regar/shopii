import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import cart from './cartlogo.png';
import logo from './logoshop.png'



//BACKGROUND IMAGE IS FROM HAIKEI.APP

const MyNavbar = ({size}) => {
    return (
        <div>
             <Navbar bg="pt-5" style={{height: '100%', width: '100%', objectFit: 'cover'}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontSize: '1rem', fontFamily: 'didot'}} >
            <img
              alt="logo"
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            SHOPII ECOMMERCE WEB
          </Navbar.Brand>
        </Container>
        <div style={{marginRight: 10, display: 'flex'}}>
            <span><img src={cart} style={{height: 40}} /> </span>
            <span style={{textAlign: 'center', fontSize:14, color: 'red', marginTop: 2, fontWeight: 'bold'}}>{size}</span>
        </div>
      </Navbar>
        </div>
    )
}

export default MyNavbar
