import React, { useContext, useEffect,useState } from 'react'
import {Navbar,Nav,Badge,Carousel,
    Card,Container,Form,FormControl,Button} from 'react-bootstrap'
import './Home.css'
import watch from '../View products/watch.jpg'
import Foot from '../Footer/Foot'
import {ImLocation2} from 'react-icons/im'
import {DataContext}from '../Admin/context/Contex1'
import axios from 'axios'
import {Link }from 'react-router-dom'
function Homepage() {

  const {VIEW, CATEGORY,COPYCAT,fetch_Category}=useContext(DataContext);
  const[viewProduct,setViewProduct]=VIEW
  const[allCategory,setAllCategory]=CATEGORY
  const[viewProductCopy,setViewProductCopy]=COPYCAT
 const[selectedItem,setSelectedItem]=useState("")
 const[searchData,setSearch]=useState("")
  

  useEffect(()=>{
    console.log("hello");
    fetch_Category();
  },[])

  const selectCategory=async()=>{


  await axios.get(`http://localhost:3000/selectedCategory/${selectedItem}`).then((res)=>{

  setViewProduct(res.data)


  })
   
  

  }
  console.log(viewProductCopy);


  const Search_btn=async(e)=>{

  
    await axios.get(`http://localhost:3000/searchdata/${searchData}`).then((res)=>{

      setViewProduct(res.data)
    console.log(res.data);
  })
//  setViewProduct(searched)


  }

 
 


  return (
    <div>


<div className='top'>

<p  className='top_ptag'>Platform for goods and service</p>
        </div>

<Navbar bg=""  sticky='top' className='navBar responsive' variant="dark">
    <Container className='nav_container'>
    <h1 style={{color:'white',letterSpacing:'4px'}}> STOCK EXCHANEGE</h1>
    <div style={{marginRight:'33px'}}>
    <Nav className="me-auto dashbord"> 
    <Link to='/home' style={{textDecoration:'none'}}>    <Nav.Link href="/home" >Home</Nav.Link></Link>
   
    <Link to='/buyer' style={{textDecoration:'none'}}> <Nav.Link href="/buyer"  >Buyer</Nav.Link></Link>
    <Link to='/seller' style={{textDecoration:'none'}}> <Nav.Link href="/seller" >Seller</Nav.Link></Link>
    <Link to='/contact' style={{textDecoration:'none'}}> <Nav.Link href="/contact" >Contact Us</Nav.Link></Link>
    <Link to='/about' style={{textDecoration:'none'}}> <Nav.Link href="/about" >About</Nav.Link></Link>
    <Link to='/' style={{textDecoration:'none'}}>  <Nav.Link href="/" >Logout</Nav.Link></Link>
      
      
    </Nav>
    
    </div>
    </Container>
  </Navbar>



<div  style={{marginBottom:'30px'}}className=' container container-fluid'>
  <Form  className="d-flex search_container">
        <FormControl style={{border:' 1px solid lightskyblue'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search" onChange={(e)=>setSearch(e.target.value)}
        />
        <Button  style={{width:'100px'}} variant="outline-info"
        
        onClick={Search_btn}
        
        
        >Search</Button>
      </Form>

      <hr style={{border:'1px solid #C47171'}}/>

      <div>

    <label>Filter :</label>
    <select className='filter_drop'   onClick={selectCategory} 
     onChange={(e)=>setSelectedItem(e.target.value)}>
   <option>Choose</option>
   {
     allCategory.map((item)=>{
         return( 

      <option >{item.list}</option>
         )
       
     })
   
    
    }
  
  
       
    </select>
</div>
<div className='container container-fuid card'>
    <div className='avl_product'>
        <h3>Available products...</h3>

    </div>
<div style={{width:'100%',display:'flex',flexWrap:'wrap',marginTop:'13px'}}>

    {
        viewProduct.map((data)=>{

     
return(
  
<Card   style={{ width: '18rem',margin:'40px' ,height:'405px'}}>
  <Card.Img variant="top" src={data.url} style={{height:'270px'}}/>
  <Card.Body>
  <Card.Title>{data.product.price}</Card.Title>
    <Card.Text>
    <Card.Title>{data.product.itm_name}</Card.Title>
    </Card.Text>
    <div className='location' >
    <Badge bg="info">{data.product.category}</Badge>{' '}
    {/* <div style={{flexDirection:'row', display:'flex'}}> 
     <ImLocation2 style={{margin:'4px'}} /><p>Location</p>
//  </div>*/}
    </div>  
  
  </Card.Body>
</Card>
)
})

}
</div>







<Carousel style={{width:'100%',height:'100vh' ,marginTop:'30px'}}>
   
{ viewProductCopy.map((item,index)=>{
if(index<3){


console.log(item);
  return(
  <Carousel.Item interval={1000}>

  <img style={{height:'100vh'}} 
      className="d-block w-100"
      src={item.url}
      alt="Second slide"
    />
   
     
    <Carousel.Caption>
      <div className='slidtext_container' >
      <h3 className='summer_text ' style={{color:'blue'}}>TRENDING COLLECTION</h3>
     
      </div>
    </Carousel.Caption>
  
  </Carousel.Item>
   )
  }
    
  })}
</Carousel>


      </div>

    
      </div>
      < Foot />
    </div>
    
    
  )
}

export default Homepage