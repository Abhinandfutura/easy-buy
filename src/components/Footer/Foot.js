import React from 'react'
import {BsTwitter,BsFillTelephoneFill ,
    BsInstagram,BsFacebook,BsFillEnvelopeFill} from "react-icons/bs";
import '../Login/Navbar.css'
function Foot() {
  return (
    <div>

        
<footer className='foot_container'>

<div className='foot_frame'>
    <ul className='foot_first_section'>
         <h2 className='contact_us'>Stock exchange</h2>
        <li> <p className='ptag'> Contact </p>
      </li>
        <li>  <p className='ptag'>About</p></li>
        <li>  <p className='ptag'>Mysupermail@mail.com</p></li>

        

    </ul>

     

 
    <ul className='foot_first_section' style={{width:'450px'}}>
        <img style={{width: '450px' ,height: '200px', marginTop : '57px' }} src="https://d32ogoqmya1dw8.cloudfront.net/images/sp/library/google_earth/google_maps_hello_world.jpg" />

        

    </ul>


</div>

<br/>
<hr className='hr_tag'/>
<div className="lastdiv_container">
<div className='last_div'>
    <BsFacebook/>
    <BsInstagram/>
    <BsTwitter/>
</div>
</div>

</footer>

    </div>
  )
}

export default Foot