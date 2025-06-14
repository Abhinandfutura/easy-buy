 import star from  '../As Buyer/star.css'
 import { useState } from 'react';
 export const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);


    const handleClick=(index)=>{
        setRating(index);
        console.log(index);
        

    }
  
    return (
      <div  style={{marginRight: '63px'}} className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={()=>handleClick(index)}
              onMouseEnter={() =>   setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span>
            </button>
          
          );
        })}
          </div>
        )
          }
     
    