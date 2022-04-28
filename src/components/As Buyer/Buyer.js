import React, { useEffect, useState,useContext } from 'react'
import {Button,Card,Badge,Form,FormControl} from 'react-bootstrap'
import {ImLocation2} from 'react-icons/im'
import Buy_Navbar from '../As Buyer/Buy_Navbar'
import watch from '../View products/watch.jpg'
import Foot from '../Footer/Foot'
import {DataContext} from '../Admin/context/Contex1'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
function Buyer() {

  const navigate=useNavigate();

  const {VIEW,CATEGORY,fetch_Category}=useContext(DataContext);

 const [viewProduct,setViewProduct]=VIEW;
 const[allCategory,setAllCategory]=CATEGORY
 const[filter,setFilter]=useState()
 const[itemSearch,setitemSearch]=useState()

console.log("view",viewProduct);

useEffect(()=>{
  fetch_Category();

},[])

const selctedCategory=async()=>{

    await axios.get(`http://localhost:3000/select/${filter}`).then((res)=>{
  
    setViewProduct(res.data)
  
  
})
 
 
}

const handle=()=>{
  navigate('/order')
}


const SearchData1=async()=>{

  
  await axios.get(`http://localhost:3000/searchitem/${itemSearch}`).then((res)=>{
  
    setViewProduct(res.data)
  
  
})
 

}
  return (
    <div>
<Buy_Navbar/>
<div style={{marginBottom:'30px'}} className=' container container-fluid' >
  <Form  className="d-flex search_container">
        <FormControl style={{border:' 1px solid lightskyblue'}}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"   onChange={e=>setitemSearch(e.target.value)}
        />
        <Button   style={{width:'100px'}} variant="outline-info"  onClick={SearchData1}>Search</Button>
      </Form>

      <hr style={{border:'1px solid #C47171'}}/>

      <div>

    <label>Filter :</label>
    <select className='filter_drop' onClick={selctedCategory}
    
    onChange={e=>setFilter(e.target.value)}>
    <option>Select</option>
      {
        allCategory.map((item)=>{
          

          return(
            <option  >{item.list}</option>

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
    {viewProduct.map((data)=>{

      return(
     
        
        <Card   style={{ width: '18rem',margin:'40px' }}>
  <Card.Img variant="top" src={data.url}/>
  <Card.Body>
  <Card.Title>{data.product.price}</Card.Title>
 
    <Card.Text style={{display:'flex',justifyContent:'space-between'}}>
     
    <Card.Title>{data.product.itm_name}</Card.Title> <Badge bg="info" style={{height:'24px'}}>{data.product.category}</Badge>{' '}
    </Card.Text>
   
    <div className='location' >
   
    <Link to={`/order/${data._id}`}>  <Button style={{height:' 36px', marginTop:' -9px',
width:'128px'}} variant='outline-info' >Order</Button></Link>
    <div style={{flexDirection:'row', display:'flex'}}>  <ImLocation2 style={{margin:'4px'}} /><p>Location</p></div></div>  
    
  </Card.Body>
</Card>



        
      
      )



    })  }
    </div>


</div>
</div>
<Foot/>

    </div>
  )
}

export default Buyer