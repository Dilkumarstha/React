import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductDetails = () => {
 const [query] = useSearchParams();
 const brand = query.get("brand");
 const limit = query.get("limit");

console.log(brand);
console.log(limit);
  return (
    <div>ProductDetails Page</div>
  )
}

export default ProductDetails