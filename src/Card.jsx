import { useState } from 'react';
import './Card.css'
function Card ({title,brand,price}){

    const [isfavourite,setIsFavourite]=useState(false);
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{brand}</p>
            <p>{price}</p>
            <button className='button' onClick={()=>{
                setIsFavourite(!isfavourite);
            }}>{isfavourite?"Favourite":"NotFav"}</button>
        </div>
    )
}

export default Card;