import React from 'react'
import Admin_Navbar from './Admin_Navbar'
import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function Users() {
  return (
    <div>

        <Admin_Navbar/>
        <div className="container container-fluid" style={{ marginTop:'50px'}}>



<h2>Users Detailes</h2>
<hr style={{color:'skyblue'}}/>




<Table striped bordered hover>
  <thead>
    <tr>
      <th>SlNo</th>
      <th>Name</th>
      <th>House name</th>
      <th>Place</th>
      <th>Post</th>
      <th>Pin</th>
      <th>District</th>
      <th>Mob</th>
      <th>Email</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mysupername</td>
      <td>qwertyuiop</td>
      <td>calicut</td>
      <td>asdfghj</td>
      <td>1234567</td>
      <td>kozhikode</td>
      <td>1234567898</td>
      <td>asdfgh@gmail.com</td>
      <td><Button variant='info'>DELETE</Button></td>
    </tr>
   
   
  </tbody>
</Table>
</div>
</div>


  
  )
}

export default Users