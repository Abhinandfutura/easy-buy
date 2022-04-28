import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function LoginHeader() {




  return (<div>
    <div className='top'>

<p  className='top_ptag'>Platform for goods and service</p>
        </div>

<Navbar bg=""  sticky='top' className='navBar ' variant="dark">
    <Container className='nav_container'>
    <h1 style={{color:'white',letterSpacing:'4px'}}> STOCK EXCHANEGE</h1>
    <div style={{marginRight:'33px'}}>
    <Nav className="me-auto dashbord">
   <Link  style={{textDecoration:'none'}} to='/'> <Nav.Link   href="#home"  >Login</Nav.Link></Link>
     <Link to='/signup' style={{textDecoration:'none'}} ><Nav.Link href="#login" 
     
     >Register</Nav.Link></Link>
      <Nav.Link href="#pricing"  >Contact us</Nav.Link>
      <Nav.Link href="#pricing" >About</Nav.Link>
      
    </Nav>
    
    </div>
    </Container>
  </Navbar>
    </div>
    
  )
}

export default LoginHeader