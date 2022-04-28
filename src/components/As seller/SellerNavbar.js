import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link}from 'react-router-dom'
function SellerNavbar() {
  return (
    <div>
         <div className='top'>

<p  className='top_ptag'>Platform for goods and service</p>
        </div>

<Navbar bg=""  sticky='top' className='navBar' variant="dark">
    <Container className='nav_container'>
    <h1 style={{color:'white',letterSpacing:'4px'}}> STOCK EXCHANEGE</h1>
    <div style={{marginRight:'33px'}}>
    <Nav className="me-auto dashbord">
   <Link  style={{textDecoration:'none'}} to='/home'> <Nav.Link   href="/home"  >Home</Nav.Link></Link>
     <Link to='/seller' style={{textDecoration:'none'}} ><Nav.Link href="/seller" 
     
     >Seller</Nav.Link></Link>
      <Link to='/seller' style={{textDecoration:'none'}} >
        </Link>
        <Link to='/view'  style={{textDecoration:'none'}}><Nav.Link href="/view"  >View</Nav.Link></Link> 
        
        <Link to='/sellerorder'style={{textDecoration:'none'}} > <Nav.Link href="/sellerorder"  >MyOrders</Nav.Link></Link>
     <Link to='/' style={{textDecoration:'none'}}><Nav.Link href="/" >Logout</Nav.Link></Link>
      
    </Nav>
    
    </div>
    </Container>
  </Navbar>


</div>
  
    
   
  )
}

export default SellerNavbar