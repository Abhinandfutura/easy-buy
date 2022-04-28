
import React, { useEffect, useState } from 'react'
import LoginHeader from '../LoginHeader/LoginHeader';
import{Button} from'react-bootstrap'
import '../Login/Navbar.css'
import Foot from '../Footer/Foot';
    import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
   
    

 

function  Login() {



  const navigate=useNavigate();

    const[input,setInput]=useState({
      email:'',
      password:''
    });

    const[formErrors,setFormErrors]=useState({status:true})

    const logindata=(event)=>{

setInput({...input,[event.target.name]:event.target.value})


    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   

    const validation=(value)=>{

    const err={status:true}

    if(!value.email){
    err.email=" * Email is require"
    err.status=false;
    }
    
    
    else if(!emailRegex.test(value.email)){
      err.email=' Entered email is not valid'
      err.status=false;
    }
    
    
    if(!value.password){
    err.password=" * Password is required"
    err.status=false;
    }
    
    return err

    }

const LoginClick=()=>{


    if(validation(input).status){

      (input.email==="admin@gmail.com" && input.password==="admin123")? navigate('/adminhome'):axios.post("http://localhost:3000/",input).then((res)=>{if(res.data.message ==="Login Successful") {navigate('/home') }else {alert(res.data.message)}});
      
    }else{
      setFormErrors(validation(input))
    }

  }



  
    

  return (

    <div>
       <LoginHeader/>
      
     <div className="Login_container"  style={{height:'57vh'}}>

         <div className="contain">

          <h2>Login</h2>
          <hr className='login_hr'/>

          <div className='username_container'>
          <div className='username'>
            <label>Email :</label>
            <input  className='login_box' type='emai' onChange={logindata} name='email'
            placeholder='eg.Mysupermail@mail.com'/>
            <p className='errortag'> {formErrors.email} </p>
          </div>
          <div className='username'>
            <label>Password :</label>
            <input className='login_box' type='password'onChange={logindata} name='password'
             placeholder='eg.Sd#12t7f'/>
                    <p  className='errortag' > {formErrors.password} </p> 
          </div>

         
          </div>
         
         </div>
     </div>
        

<img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_xd_CTAimage?$pjpeg$&jpegSize=300&wid=1920'
className='body_img' />
 <div className="login_btn_container" style={{top:'556px'}}>

        
<Button variant='outline-dark'  onClick={LoginClick} 
 size="lg" className='login_btn' >LOGIN </Button>
</div> 

  <Foot/>


        </div>
  )
}

export default Login

