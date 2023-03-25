import React from 'react'
import ProductCard from '../../../components/Elements/ProductCard'

const FeaturedProduct = () => {
  return (
    <selection className="my-20">
        <h2 className="text-center text-3xl font-medium mt-10">FeaturedProduct</h2>
        <div className=" flex flex-wrap justify-center lg:flex-row" >
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </selection>
  )
}

export default FeaturedProduct
 