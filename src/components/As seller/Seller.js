import React, { useContext, useEffect, useState } from 'react'
import SellerNavbar from './SellerNavbar'
import{Button} from 'react-bootstrap'
import Foot from '../Footer/Foot'
import {DataContext} from '../Admin/context/Contex1'
import axios from 'axios'
function Seller() {

  const{CATEGORY,STATUS}=useContext(DataContext);
  const [allCategory,setAllCategory]=CATEGORY;
   
  const [url,setUrl]=useState();

  const[product,setProduct]=useState({
    itm_name:'',
    price:'',
    category:'',
    description:''
  })

  const[formErrors,setFormErrors]=useState({error:'error'});
  const[ErrorStatus,setErrorStatus]=useState(false)

  const[image,setImage]=useState("");

  const File_read=(event)=>{

    setImage(event.target.files[0])
  }


  const File_btn=async()=>{

    const data = new FormData();
    data.append("file", image)
    data.append("upload_preset", "Abhinand")
    data.append("cloud_name","ddkjryqyv")
    await axios.post("https://api.cloudinary.com/v1_1/ddkjryqyv/image/upload",data).then((res)=>{
        console.log("result",res);
         setUrl(res.data.url)
         alert('image Uploaded')
    console.log(res.data.url);
    })
    
    
  }

 const Product_read=(event)=>{

 setProduct({...product,[event.target.name]:event.target.value})


 }
 const AddProduct_btn=()=>{

  setFormErrors(validate(product));
  setErrorStatus(true)
  
 }

 useEffect(()=>{

  if(Object.keys(formErrors).length===0 && ErrorStatus){

    let newDate = new Date().toLocaleDateString()
  axios.post('http://localhost:3000/addproduct',{product,url:url,newDate:newDate}).then((res)=>{
    alert(res.data.message)
     })
    }
    
 },[formErrors])

 const validate=(value)=>{
   const err={};
   if(!value.itm_name){
     err.itm_name='Product name is require'
   }
   if(!value.description){
     err.description='Product name is require'
   }
   if(!value.price){
     err.price='Product name is require'
   }
   if(!value.category){
     err.category='Product name is require'
   }
   return err
 }
  return (
    <div>

        <SellerNavbar/>

        <div className="Login_container" style={{height:'150vh',margin:0}} >

<div className="contain" style={{marginTop: '100px'}}>

 <h2>Add Products</h2>
 <hr className='login_hr'/>

 <div className='user_container' > 
 <div className='username' style={{width:"45%"}}>
   <label>Item name :</label>
   <input  className='login_box' type='text'    onChange={Product_read} name='itm_name'
   placeholder='Itemname'/>
   <p className='errortag'>{formErrors.itm_name}</p>
  

 </div>
 <div className='username' style={{width:"45%"}}>
   <label>Category :</label>
   <select className='login_box'  onChange={Product_read} name='category' >
     <option>Category</option>
    {
      allCategory.map((item)=>{
return(
        
        <option>{item.list}</option>
)
      })
    }
    
     
  </select>
  <p className='errortag'>{formErrors.category}</p>

</div>
<div className='username' style={{width:"45%"}}>


   <label>Price :</label>
   <input  className='login_box' type='text'   onChange={Product_read} name='price'
   placeholder='Amount'/>
    <p className='errortag'>{formErrors.price}</p>
  
 </div>
<div className='username' style={{width:"45%"}}>
   <label>Description:</label>


 <textarea style={{height:'115px'}}     onChange={Product_read}  name='description'></textarea>

 <p className='errortag'>{formErrors.description}</p>
 </div>

<div className='username' style={{width:"45%",marginTop:'-15px'}}>


   <label>Pic :</label>
   <input  className='login_box' type='file'  onChange={File_read}  />


   <Button variant='success' style={{    width: '100px',marginTop: '10px'}}
   onClick={File_btn}
   >Upload</Button>
  
 </div>
</div></div>
</div>


<img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_xd_CTAimage?$pjpeg$&jpegSize=300&wid=1920'
className='body_img' style={{marginTop:'58px'}}/>
<div className="login_btn_container" style={{top:'765px'}} >


<Button variant='outline-dark'  style={{top:'78px'}}
size="lg" className='login_btn' onClick={AddProduct_btn} >ADD </Button>
</div> 

<Foot/>


    </div>
  )
}

export default Seller