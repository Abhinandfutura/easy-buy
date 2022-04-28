import React, { useContext, useEffect } from 'react'
import SellerNavbar from './SellerNavbar'
import {Button,Card} from 'react-bootstrap'
import watch from'../View products/watch.jpg'
import Foot  from '../Footer/Foot'
import {DataContext} from '../Admin/context/Contex1'
import { Link } from 'react-router-dom'
import UpdateProduct from './UpdateProduct'
function ViewProduct() {
  const {VIEW,fetch_Category}=useContext(DataContext);
  const[viewProduct,setViewProduct]=VIEW

  useEffect(()=>{
    fetch_Category();
  },[])
  return (
    <div>
         <SellerNavbar/>
  
        < div className="container container-fluid" style={{ marginTop:'50px'}}>
        {viewProduct.map((item)=>{

return(<>


    
 <h2>{item.product.itm_name}</h2>
 <hr style={{color:'skyblue'}}/>




      <div style={{heght:'300px'}}>

       <div className='card_order'>
           <div>
        <Card  style={{width:'23rem' }}>
  <Card.Img style={{ height: '276px'}} variant="top" src={watch} />

</Card>
</div >
<div style={{ marginLeft:'80px'}}>
<h5>Amout: ₹{item.product.price} </h5>
<br/>


<h5>Description :</h5>
<p style={{width:'107vh'}}>
     {item.product.description}
      </p>

      <div style={{display:'flex'}}><h6>Category  :</h6> 
      <p style={{marginLeft:' 6px'}}>{item.product.category}</p></div>


      <div style={{display:'flex'}}> <h6>Date :</h6>
      <p style={{marginLeft:' 6px',marginTop:' -2px'}}>{item.newDate}</p></div>


      

    <Link to={`/update/${item._id}`}><Button variant="warning"  style={{width:'100px'}} >EDIT</Button></Link>
    <Button variant="warning"  style={{marginLeft:'20px',width:'100px'}}>DELETE</Button>
   
    </div>
           
       
    </div>
    
   
  
</div>
<hr style={{color:'skyblue'}}/>

    
</> )
  })}



</div>



 <Foot/>
   
 
  </div>
  )
}

export default ViewProduct