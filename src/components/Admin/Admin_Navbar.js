import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {Link}from 'react-router-dom'
function Admin_Navbar() {
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
     <Link to='/adminhome'style={{textDecoration:'none'}} >
          <Nav.Link href="#home"  >Home</Nav.Link>
          </Link>

          <Link to='/users'style={{textDecoration:'none'}} >
      <Nav.Link href="/users"  >Users</Nav.Link>  </Link>

      <Link to='/addcategory'style={{textDecoration:'none'}} >
      <Nav.Link href="#seller" >AddCategory</Nav.Link>

      </Link>
     
      <Link to='/'style={{textDecoration:'none'}} >
      <Nav.Link href="#logout" >Logout</Nav.Link>
      </Link>
      
    </Nav>
    
    </div>
    </Container>
  </Navbar>



    </div>
  )
}

export default Admin_Navbar