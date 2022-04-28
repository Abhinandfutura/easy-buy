import React from 'react'
import {Navbar,Nav,Container
 } from 'react-bootstrap'
 import {Link}from 'react-router-dom'

 
function Buy_Navbar() {
  return (
    <div>
        
<div className='top'>

<p  className='top_ptag'>Platform for Sell and Purchase</p>
        </div>

<Navbar bg=""  sticky='top' className='navBar' variant="dark">
    <Container className='nav_container'>
    <h1 style={{color:'white',letterSpacing:'4px'}}> STOCK EXCHANEGE</h1>
    <div style={{marginRight:'33px'}}>
    <Nav className="me-auto dashbord">
    <Link to='/home' style={{textDecoration:'none'}}>   <Nav.Link href="/home"  >Home</Nav.Link></Link> 
   
     <Link to='/buyer' style={{textDecoration:'none'}}><Nav.Link href="/buyer"  >Buyer</Nav.Link></Link> 
     <Link to='/myorder' style={{textDecoration:'none'}}> <Nav.Link href="/order" >Myorders</Nav.Link></Link> 
     <Link to='/contact' style={{textDecoration:'none'}}> <Nav.Link href="/contact" >Contact Us</Nav.Link></Link> 
     <Link to='/about' style={{textDecoration:'none'}}> <Nav.Link href="/about" >About</Nav.Link></Link> 
     <Link to='/' style={{textDecoration:'none'}}> <Nav.Link href="/" >Logout</Nav.Link></Link> 
      
      
    </Nav>
    
    </div>
    </Container>
  </Navbar>




 

    </div>
  )
}

export default Buy_Navbar