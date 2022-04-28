import React from 'react'
import SellerNavbar from './SellerNavbar'
import {Table} from 'react-bootstrap'
// import Foot from '../Footer/Foot'

function SellerOrder() {
  return (
    <div>
        <SellerNavbar/>
        <div style={{marginTop:'50px'}} className=' container container-fluid' >
        <h2>My Orders</h2>
          <hr className='login_hr'/>
      
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>Slno.</th>
      <th>Customer name</th>
      <th>Mob</th>
      <th>Place</th>
      
      <th>Product</th>
      <th>Price</th>
      
      <th style={{textAlign:'center'}}>Status</th>
     
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>LED TV</td>
      <td>30000</td>
      <td style={{display:'flex',justifyContent:'space-evenly'}}>
        <input  style={{marginTop:'4px'}} type='radio' name='radiobtn'/><label style={{fontSize:'15px', marginLeft:'-15px '}}>
          Ordered</label>
        <input  style={{marginTop:'4px'}} type='radio'  name='radiobtn'/><label style={{fontSize:'15px', marginLeft:'-15px '}}>
          Received</label>
        <input  style={{marginTop:'4px'}} type='radio'  name='radiobtn'/><label style={{fontSize:'15px' ,marginLeft:'-15px '}}>
          Delivered</label>
      </td>
    </tr>
      
  </tbody>
</Table>
          </div>

{/* <Foot/> */}
    </div>
  )
}

export default SellerOrder