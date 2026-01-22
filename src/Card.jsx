import { useState } from 'react';
import './Card.css'
import { Link } from 'react-router';
function Card({ title, description, link }) {

    const [isfavourite, setIsFavourite] = useState(false);
    return (
        <div className="flex flex-col gap-4 w-[500px] shadow-lg rounded-xl p-5 transition-all duration-400 ease-in-out hover:-translate-y-[1px]  hover:shadow-xl ">

            <h1 className='text-2xl text-green-700 font-medium '>
                {title}
                </h1>
            <p className='m-10'>{description}</p>
            <div className="flex place-content-between p-2">
                <Link className='text-green-700' to={link}>Check Out</Link>

             <button
  onClick={() => setIsFavourite(!isfavourite)}
  className={`
    px-5 py-2 rounded-xl cursor-pointer
    transition-all duration-300 ease-in-out
    hover:-translate-y-[1px] hover:shadow-xl
    ${isfavourite
      ? "bg-green-600 text-white"
      : "bg-white text-green-700 border border-green-600"
    }
  `}
>
  {isfavourite ? "Favourite" : "NotFav"}
</button>


            </div>
        </div>
    )
}

export default Card;