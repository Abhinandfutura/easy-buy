import React ,{useEffect, useState} from 'react'
import Buy_Navbar from './Buy_Navbar'
import Foot from '../Footer/Foot'
import{Card,Button,Form,FormControl,Modal}from 'react-bootstrap'
import '../As Buyer/Order.css'
import watch from '../View products/watch.jpg'
import {ImLocation2} from 'react-icons/im'
import { StarRating } from './StarRating'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Order() {

  const {id}=useParams()

     const[data,setData]=useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [order,setOrder]=useState([])

  const SearchorderedData=async()=>{
  

    await axios.get(`http://localhost:3000/orderdata/${id}`).then((res)=>{

     setOrder(res.data.product)
    })

    // const data =order.map((data)=>{
      
    // }
    // )
    // setData(data)

  }
    useEffect(()=>{

      SearchorderedData();

    },[])

    
  
  return (
    <div>

<Buy_Navbar/>
  

<div className="container container-fluid" style={{ marginTop:'50px'}}>



  
  <h2>{order.itm_name}</h2>
 <hr style={{color:'skyblue'}}/>




      <div style={{heght:'300px'}}>

       <div className='card_order'>
           <div>
        <Card  style={{width:'23rem' }}>
  <Card.Img style={{ height: '276px'}} variant="top" src={order.url}/>

</Card>
</div >
<div style={{ marginLeft:'80px'}}>
<h5>Amout: ${order.price} </h5>
<br/>


<h5>Description :</h5>
<p>
    {order.description}
      </p>

      <div style={{display:'flex'}}><h6>Location  :</h6> <ImLocation2 style={{margin:'4px'}} /></div>
      <div style={{display:'flex'}}> <h6>Sellername :</h6><p>mysupername</p></div>


      {/* Modal section */}

    <Button variant="warning" onClick={handleShow}>OrderNow</Button>
   
   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{justifyContent:'center'}}>
          <Modal.Title style={{textAlign:'center'}}>Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='feed'>
            <label>Feedback</label><br/>
        <input style={{marginRight: '51px'}}  type='text'/><br/>
        </div>
        <div className="feed">
        <label>Rating</label>
        <StarRating  /><br/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='feed_btn' variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button className='feed_btn' variant="outline-success" onClick={handleClose}>
         OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
   
  
  </div>
<hr style={{color:'skyblue'}}/>
</div>


</div>



<Foot/>
    </div>
  )
}

export default Order