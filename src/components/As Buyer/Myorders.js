import React from 'react'
import Buy_Navbar from './Buy_Navbar'
import {Card} from 'react-bootstrap'
import watch from'../View products/watch.jpg'
import {ImLocation2} from 'react-icons/im'
import Foot from '../Footer/Foot'

function Myorders() {
  return (
    <div>

        <Buy_Navbar/>

        <div className="container container-fluid" style={{ marginTop:'50px'}}>



 <h2>My Orders</h2>
 <hr style={{color:'skyblue'}}/>




      <div style={{heght:'300px'}}>

       <div className='card_order'>
           <div>
        <Card  style={{width:'23rem' }}>
  <Card.Img style={{ height: '276px'}} variant="top" src={watch} />

</Card>
</div >
<div style={{ marginLeft:'80px'}}>
<h5>Amout: $500 </h5>
<br/>


<h5>Description :</h5>
<p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ea aliquam consectetur praesentium veritatis laboriosam nihil eveniet! 
      Repellat minus officiis quaerat eius molestias nam accusamus minima sint aliquam consequatur. 
      Atque, aperiam!
      </p>

      <div style={{display:'flex'}}><h6>Location  :</h6> <ImLocation2 style={{margin:'4px',}} /><p style={{marginTop:'-1px'}}>Location</p>
      <div style={{width:'50%',display:'flex',justifyContent:'flex-end'}}>
      <h6>Date :</h6><p style={{marginTop:'-1px'}}>date</p></div>
      </div>
      <div style={{display:'flex'}}> <h6>Sellername :</h6><p style={{marginTop:'-1px'}}>mysupername</p>
      <div style={{width:'45%',display:'flex',justifyContent:'flex-end'}}>
      <h6>Time :</h6><h7 style={{marginTop:'-1px'}}>date</h7></div>
      </div></div>


</div>
<hr style={{color:'skyblue'}}/></div>

</div>
<Foot/>
    </div>
  )
}

export default Myorders