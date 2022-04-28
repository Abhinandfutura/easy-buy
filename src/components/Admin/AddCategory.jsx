import React,{ useContext, useState} from 'react'
import Admin_Navbar from './Admin_Navbar'
import {BsSearch,BsFillPencilFill} from 'react-icons/bs'
import{MdDelete} from 'react-icons/md'
import {Modal,Button} from 'react-bootstrap'
import axios from 'axios'
import {DataContext} from './context/Contex1'
function AddCategory() {

const {CATEGORY,STATUS}=useContext(DataContext);

const [allCategory,setAllCategory]=CATEGORY;

const[status,setStatus]=STATUS;

const [addCategory,setAddcategory]=useState({
  list:''
})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   

    const[dataId,setDataId]=useState("")
    const[updateData,setUpdateData]=useState("")

    
 

    const Read=(e)=>{
    
      setAddcategory({...addCategory,[e.target.name]:e.target.value})
      console.log(addCategory);

    }

    console.log("list",addCategory);

    const SendData=(event)=>{
      
      if(event.key=='Enter'){
      
        
        axios.post('http://localhost:3000/users/category', addCategory).then((res)=>{

         console.log(res);
         setStatus(true)
        })
     
       
      }
      setStatus(false)
    }


      //get category.......
     

      const Del=async(id)=>{
        setStatus(true);
       
        await axios.get(`http://localhost:3000/users/del/${id}`).then((res)=>{
         
          
        })
        setStatus(false);
      }
    
const SearchData=()=>{
  const Searchdata=allCategory.filter((item)=>{

    return(item.list==addCategory.list)

    
  })
  setAllCategory(Searchdata);
 
}


const handleShow =(id) =>{

  setDataId(id)
        setShow(true);
      } 


const updation=async()=>{
  setShow(false)
  
 await  axios.post('http://localhost:3000/users/updat', {dataId,updateData}).then((resul)=>{


 console.log(resul);
  setStatus(true)
  })
  setStatus(false)
}
  return (
    <div>

        <Admin_Navbar/>
        <div className="container container-fluid"  style={{marginTop:'50px'}}>

<div className="contain">

 <h2>Add Category</h2>
 <hr className='login_hr'/>

 {/* //input Section */}
 

 <input type='text' className='login_box'  style={{width:'30%',borderRadius:'5px'}} 

 
 placeholder='Category name' onChange={Read}  name='list'  onKeyPress={SendData}
 />
 
 <BsSearch onClick={SearchData}
  style={{fontSize:'26px',position:'absolute'
  ,top:'92px', color: '#0000009c',left: '265px'
  ,cursor:'Pointer'}}/>
  
  
  
  <ul style={{width:'100%', height:'90px',
  marginTop:'20px' ,display:'flex' ,flexWrap:'wrap',padding:'0px',justifyContent:'space-between'}} >
  
   {allCategory.map((item)=>{
     
     return(
   
 
<li style={{listStyle:'none',  border:' 1px solid #aaaaaa',
        
       marginTop:'10px',
        padding: '10px',
        borderRadius: '5px',
        width: '306px',position:'relative'
    }}>{item.list}
     
   

     


 <MdDelete   onClick={()=>Del(item._id)}
 style={{
    position: 'absolute',
    top:' 8px',
    left:' 263px',
    color:' #2f6073',
    fontSize: '30px',
    cursor:'pointer'
 }}  />


        <Modal   style={{borderRadius:'20px'}}  show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Updation window</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{alignItems: 'center', justifyContent: 'center',display: 'flex'}}>
              <input style={{ padding: '10px', width:' 71%'}} 
              
              onChange={(e)=>setUpdateData(e.target.value)}
              type='text'/></Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success"   onClick={updation} >
              Update 
            </Button>
          </Modal.Footer>
        </Modal>
      

        <BsFillPencilFill onClick={()=>handleShow(item._id)}
        style={{
            position: 'absolute',
            top: '11px',
            left: '228px',
            fontSize: '23px',
            color:' #2f6073',
            cursor:'pointer'
         }}   />
         
       
         </li>)})}
         </ul> </div>

     

    </div>
    </div>
  )
}

export default AddCategory