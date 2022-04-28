import React, { useEffect, useState } from 'react'
import SellerNavbar from './SellerNavbar'
import './UpdateProduct.css'
import Foot from '../Footer/Foot'
import {Button} from 'react-bootstrap'
import {useParams}from 'react-router-dom'
import axios from 'axios'

function UpdateProduct() {
const {id}=useParams()
  const[selectData,setSelectData]=useState([])

  const Display=async()=>{

    await axios.get(`http://localhost:3000/update/${id}`).then((res)=>{
      setSelectData(res.data)
   
      console.log(res.data);
    })
  }
  useEffect(()=>{
    Display();
  },[])
   
 


  return (
    <div>
        

        <SellerNavbar/>
        
        <div className="Login_container" >

<div className="contain" style={{marginTop: '30px'}}>

 <h2 style={{letterSpacing:'3px'}}>EDIT</h2>
 <hr className='login_hr border_col'/>

 <div className='user_container ' > 
 <div className='username ' style={{width:"45%"}}>
   <label>Item name :</label>
   <input  className='login_box border_col' type='text'  
   placeholder='Itemname'/>
  

 </div>
 <div className='username' style={{width:"45%"}}>
   <label>Category :</label>
  <select className='login_box border_col' >
      <option>select</option>
      <option>Tablet</option>
      <option>Headphones</option>
  </select>
  

</div>
<div className='username' style={{width:"45%"}}>
   <label>Price :</label>
   <input  className='login_box border_col' type='text'   
   placeholder='Amount'/>
  
 </div>
<div className='username' style={{width:"45%"}}>
   <label>Description:</label>
 <textarea className='border_col' style={{height:'115px'}}   ></textarea>
 </div>

<div className='username' style={{width:"45%",marginTop:'-15px'}}>
   <label>Pic :</label>
   <input  className='login_box border_col' type='file' value={selectData.url} />
  
 </div>
</div></div>
</div>


<img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_xd_CTAimage?$pjpeg$&jpegSize=300&wid=1920'
className='body_img' style={{marginTop:'58px'}}/>
<div className="login_btn_container" style={{top:'700px'}} >


<Button variant='outline-info' 
size="lg" className='login_btn ' >UPDATE </Button>
</div> 

<Foot/>

    </div>
  )
}

export default UpdateProduct