import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/Elements/ProductCard'

const FeaturedProduct = () => {
  const [products,setProduct]=useState([]);
  useEffect(()=>{
    async function fetchproduct(){
      const res=await fetch("http://localhost:8000/products")
      const data=await res.json()
      setProduct(data)
    }
    fetchproduct()
  },[])
  return (
    <selection className="my-20">
        <h2 className="text-center text-3xl font-medium mt-10">FeaturedProduct</h2>
        <div className=" flex flex-wrap justify-center lg:flex-row" >
          {
            products.map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))
          }
         
  
        </div>
    </selection>
  )
}

export default FeaturedProduct
 