import React from 'react'
import { useState } from 'react'
import TopSellers from '../TopSellers'

const BestSeller = () => {
  const [seller,setSeller]=useState([
    {
      id:1,
      sellerName:"Elangamani",
      totalSales:"200kg",
      image:"elango",
      rank:1
      },
      {
        id:2,
      sellerName:"Chinnadurai",
      image:"chinnadurai",
      totalSales:"197kg",
      rank:2
      },
      {
        id:3,
      sellerName:"Barathan",
      image:"barathan",
      totalSales:"182kg",
      rank:3
      }

  ])
  return (
<section className='grid grid-cols-3 '>
    {
      seller.map((seller)=>{
        return <TopSellers key={seller.id} seller={seller} /> 
      })
    }
</section>
    
  ) 
}

export default BestSeller