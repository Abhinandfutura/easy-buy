import React, { createContext,useState,useEffect } from 'react'
import axios from 'axios'
export const DataContext=createContext();
function Contex1({children}) {

    const[allCategory,setAllCategory]=useState([])
    const [viewProduct,setViewProduct]=useState([]);
    const[viewProductCopy,setViewProductCopy]=useState([])
      const[status,setStatus]=useState(false);

    const getData=async()=>{
        await axios.get('http://localhost:3000/users/getData').then((responce)=>{
          setAllCategory(responce.data)
        
        })
       
 
        setStatus(false)
     
      }

      useEffect(()=>{
        getData();

      },[status])

      const fetch_Category=async()=>{

       await axios.get('http://localhost:3000/viewproducts').then((res)=>{


          setViewProduct(res.data)
          setViewProductCopy(res.data)
        })

      }

  return (
  <DataContext.Provider value={{CATEGORY:[allCategory,setAllCategory],STATUS:[status,setStatus]
  ,VIEW:[viewProduct,setViewProduct],COPYCAT:[viewProductCopy,setViewProductCopy] ,fetch_Category}}>

{children}

  </DataContext.Provider>
  )
}

export default Contex1