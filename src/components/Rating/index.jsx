import { useState } from "react";
import CardRating from "../CardRating";
import CardThank from "../CardThank";


const Rating = () =>{
    const [rating, setRating]= useState(0)
    const [submit,setSubmit]= useState(true)

    const handleChange = (e) => {
        setRating(parseInt(e.target.value));
    }
    
    const handleClick = (e) => {
        setSubmit(false);
    }

    return (
        <>
            
            {submit ? <CardRating  handleChange={handleChange} handleClick={handleClick}/>: <CardThank rating={rating} />
            }
            
            {/* <CardRating  handleChange={handleChange} handleClick={handleClick}/> */}
{/*             
            <CardThank rating={rating} /> */}
            {submit}
        </>
    )
}

export default Rating;