import React, { useEffect } from 'react'
import LoginHeader from '../LoginHeader/LoginHeader'
import {Button} from 'react-bootstrap'
import '../Signup/Signup.css'
import Foot from '../Footer/Foot'
import'../Login/Navbar.css'
import {useState}from 'react'
import { BsSortNumericUpAlt } from 'react-icons/bs'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


function Signup() {

  const navigate=useNavigate();
  const[data,setData]=useState({
    name:'',  house:'',mob:'',city:'',email:'',password1:'',gender:'',dis:''
  

  })
  const [password2,setPassword2]=useState("")
 

const UserInput=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}
const[formErrors,setFormErrors]=useState({});



const Signup_click=()=>{
  

  if(validate(data,password2).status){
    
    axios.post('http://localhost:3000/signup',data).then((res)=>{
     
    res.data.message ?
      alert(res.data.message):
    
        navigate('/home')
       
    })}
  else {

    setFormErrors(validate(data))
  
}
  }


console.log("error",formErrors);
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

var mobRegex=new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')

const validate=(input,pass)=>{
  
  const err ={status:true}

  if(!input.name){
    err.name='* Name is require'
    err.status=false;
   }
  if(!input.house){
    err.house=' * House name is require'
    err.status=false;

  }
  if(!input.mob){
    err.mob= '* Mobile number is require'
    err.status=false;

  }
  else if(!mobRegex.test(input.mob)){

   err.mob='eg.Must containe 10 Digits'
   err.status=false;
  }
  if(!input.city){
    err.city='* City name is require'
    err.status=false;

  }
  if(!input.email){
    err.email='* Email is require'
    err.status=false;

  }
  else if(!emailRegex.test(input.email)){
    err.email='eg.mysupername@mail.com'
    err.status=false;
  }
  if(!input.gender){
    err.gender='* Gender is require'
    err.status=false;

  }
  if(!input.dis){
    err.dis='* District is require'
    err.status=false;

  }
  if(!input.password1){
    err.password1='* Enter a password'
    err.status=false;

  }
  else if(!strongRegex.test(input.password1)){
    err.password1='* password must containes atleast one  Capital letter,small letter,Symbol,number with length 8'
    err.status=false;
  }
  if(!pass){
    err.password2='* Confirm  password'
    err.status=false;

  }else if(input.password1!==password2){

    err.pass='* Incorrect password ,Type same password'
    err.status=false;
  }

return err
}


console.log("data",data);

  return (
    <div>
        <LoginHeader/>

        <div className="Login_container"  style={{height:'150vh'}}>

         <div className="contain" >

          <h2>Login</h2>
          <hr className='login_hr'/>

          <div className='user_container' > 
          <div className='username' style={{width:"45%"}}>
            <label>Name :</label>
            <input  className='login_box' type='text' name='name' onChange={UserInput}
            placeholder='Mysupername'/>
         <p  className='errortag'> {formErrors.name}</p> 

          </div>
          <div className='username' style={{width:"45%"}}>
            <label>House name :</label>
            <input  className='login_box' type='text' name='house' onChange={UserInput}
            placeholder='Housename'/>
           <p  className='errortag'> {formErrors.house}</p>
           

          </div>
          <div className='username'  style={{width:"45%"}}>
            <label>Gender :</label>


            <div className='Radio_div' >
            <input   type='Radio'  style={{marginTop:'7px'}} value='male' onChange={UserInput} name='gender'
            />
               <label style={{fontSize:'17px',marginLeft:'10px'}}> Male </label>
            <input   style={{marginLeft:'30px',marginTop:'7px'}} type='Radio' value='female' 
            name='gender' onChange={UserInput}
            />
           
               <label style={{fontSize:'17px',marginLeft:'10px'}}>Female </label> <br></br>
               
              <p  className='errortag'> {formErrors.gender}</p>
               </div>
          </div>
          <div className='username' style={{width:"45%"}}>
            <label>Mobile No :</label>
            <input  className='login_box' type='tel' name='mob' onChange={UserInput}
            placeholder='Mobile No'/>
           <p  className='errortag'> {formErrors.mob}</p>
           

          </div>
          <div className='username' style={{width:"45%"}}>
            <label>City :</label>
            <input  className='login_box' type='text' name='city' onChange={UserInput}
            placeholder='City'/>
           <p className='errortag' >{formErrors.city}</p>

          </div>
          <div className='username' style={{width:"45%"}}>
            <label>District :</label>
            <select className='login_box'  onChange={UserInput} name='dis'>

              <option value='None'>Select</option>
              <option value='Kasargod'>Kasargod</option>
              <option value='Kannur'>Kannur</option>
              <option value='Kozhikode'>Kozhikode</option>
              <option value='Wayanad'>Wayanad</option>
              <option value='Malappuram'>Malappuram</option>
              <option value='Thrissur'>Thrissur</option>
              <option value='Palakkad'>Palakkad</option>
              <option value='Earnakulam'>Eranakulam</option>
              <option value='Kollam'>Kollam</option>
              <option value='Idukki'>idukki</option>
              <option value='Pathanamthitta'>Pathanamthitta</option>
              <option value='Kottayam'>Kottayam</option>
              <option value='Alappuzha'>Alappuzha</option>
              <option value='Thiruvanadapuram'>Thiruvanandapuram</option>
              
            </select>
            
            <p  className='errortag'>  {formErrors.dis}</p>


          </div>
          <div className='username' style={{width:"45%"}}>
            <label>Email :</label>
            <input  className='login_box' type='text' name='email' onChange={UserInput}
            placeholder='eg.Mysupermail@mail.com'/>
             
             
             <p  className='errortag'>    {formErrors.email}</p>
          </div>
          <div className='username' style={{width:"45%"}}>
          <label>password :</label>
            <input  className='login_box' type='password' name='password1' onChange={UserInput}
            placeholder='eg.Sd#12t7f'/>
           

           <p  className='errortag'>   {formErrors.password1}</p>
          </div>
          <div className='username' style={{width:"45%"}}>
            <label>Confirm password :</label>
            <input  className='login_box' type='password'  onChange={(e)=>{setPassword2(e.target.value)}}
            placeholder='Type same password'/>
           

           <p  className='errortag'>   {formErrors.password2}</p>
          </div>
          <div className="username" style={{display:'flex', alignItems:'center',width:'100%',marginTop:'35px'}} >
          <Button variant='outline-dark'  
 size="lg"  className='login_btn' 
 onClick={Signup_click}style={{boxShadow: '0px 2px 0.8px white' ,position:'unset' }}>LOGIN </Button>
</div> 
        
         

        


         
          </div>
         
         
         </div>
     </div>
     <div className='body_image'>
     <img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/dt_xd_CTAimage?$pjpeg$&jpegSize=300&wid=1920'
        className='body_img'/>
</div>


  
  <Foot/>



    </div>
  )
}

export default Signup