import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import {useState}from 'react'
// import{Button,Modal,FormControl,Form}from 'react-bootstrap'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/View products/Homepage'
import Buyer from './components/As Buyer/Buyer';
import Order from './components/As Buyer/Order';
import Myorders from './components/As Buyer/Myorders';
import Seller from './components/As seller/Seller.js'
import UpdateProduct from './components/As seller/UpdateProduct';
import ViewProduct from './components/As seller/ViewProduct';
import SellerOrder from './components/As seller/SellerOrder';
import AddCategory from './components/Admin/AddCategory';
import Users from './components/Admin/Users';
import Admin_home from './components/Admin/Admin_home';


function App() {
 
  
  return (
    <div className="App">

  
  
    
   <BrowserRouter>
   <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/home' element={<Home/>} />
         <Route path='/buyer' element={<Buyer/>}/>
         <Route path='/order/:id' element={<Order/>}/>
         <Route path='/myorder' element={<Myorders/>}/>
         <Route path='/seller' element={<Seller/>}/>
         <Route path='/update/:id' element={<UpdateProduct/>}/>
         <Route path='/view' element={<ViewProduct/>}/>
         <Route path='/sellerorder' element={<SellerOrder/>}/>
         <Route path='/addcategory' element={<AddCategory/>}/>    
         <Route path='/users' element={<Users/>}/>
         <Route path='/adminhome'element={<Admin_home/>}/>
   </Routes>
   
   </BrowserRouter>




    </div>
      )

}

export default App;
