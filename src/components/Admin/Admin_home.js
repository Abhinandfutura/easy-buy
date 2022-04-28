import React from 'react'
import Admin_Navbar from './Admin_Navbar'
import {Carousel,Card,Badge,Form,FormControl,Button} from 'react-bootstrap'
import Foot from '../Footer/Foot'
import{ImLocation2}from 'react-icons/im'
import watch from '../View products/watch.jpg'
import {HiUserCircle} from 'react-icons/hi'

function Admin_home() {
  return (
    <div><Admin_Navbar/>


    
<div  style={{marginBottom:'30px'}}className=' container container-fluid'>
  <Form  className="d-flex search_container">
        <FormControl style={{border:' 1px solid lightskyblue'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button  style={{width:'100px'}} variant="outline-info">Search</Button>
      </Form>

      <hr style={{border:'1px solid #C47171'}}/>

      <div>

    <label>Filter :</label>
    <select className='filter_drop'>
        <option  >Choose</option>
        <option>tabs</option>
    </select>
</div>
<div className='container container-fuid card'>
    <div className='avl_product'>
        <h3>Available products...</h3>

    </div>
<Card   style={{ width: '18rem',margin:'40px' }}>
  <Card.Img variant="top" src={ watch}/>
  <Card.Body>
  <Card.Title>$500</Card.Title>
    <Card.Text>
        <div style={{display:'flex' ,justifyContent:'space-between'}}>
    <Card.Title style={{display:'flex'}}> Fastrack  </Card.Title> <HiUserCircle style={{ marginLeft: '56px',marginTop:' 6px'
}}/><p>mysupername</p></div>
    </Card.Text>
    <div className='location' >
    <Badge bg="info">Watches</Badge>{' '}
    <div style={{flexDirection:'row', display:'flex',marginRight:'40px',marginTop:'-21px'}}>  <ImLocation2 style={{margin:'4px',fontSize:'15px'}} /><p>Location</p></div></div>  
    
  </Card.Body>
</Card>







<Carousel style={{width:'100%',height:'100vh' ,marginTop:'30px'}}>
  <Carousel.Item interval={1000}>
  <img style={{height:'100vh'}} 
      className="d-block w-100"
      src={watch}
      alt="Second slide"
    />
    <Carousel.Caption>
      <div className='slidtext_container' >
      <h3 className='summer_text'>TRENDING COLLECTION</h3>
     
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:'100vh'}} 
      className="d-block w-100"
      src={watch}
      alt="Second slide"
    />
    <Carousel.Caption>
      <div className="slidtext_container">
      <h3 className='summer_text' >TRENDING COLLECTION</h3>
    
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img style={{height:'100vh'}} 
      className="d-block w-100"
      src={watch}
      alt="Second slide"
    />
    <Carousel.Caption>
      <div className="slidtext_container">
      <h3 className='summer_text'>TRENDING COLLECTION</h3>
     
        
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>

    
      </div>
      < Foot />
        </div>
  )
}

export default Admin_home