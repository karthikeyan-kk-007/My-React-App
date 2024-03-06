import React, { useState } from 'react'
import  {Link}  from 'react-router-dom';

function Filters() {

    const handleLatest =()=>{
        setSelectedItem(1)
    }
    const handleBestSeller =()=>{
        setSelectedItem(2)

    }
    const handleSpecial =()=>{
        setSelectedItem(3)
    }

    const [selectedItem,setSelectedItem]=useState(1)
  return (
<section className=' w-3/5 md:w-4/6 my-10 py-3 mx-auto flex flex-col md:flex-row  justify-around'>
<Link to="/home/fruitshop/latest">
    <button
    onClick={handleLatest}
    className={`filter ${selectedItem=== 1 ? 'bg-fuchsia-900 text-white' : 'text-black'}`}
    >
        Latest
    </button>
    </Link>
    <Link to = "/home/fruitshop/bestseller"><button 
    onClick={handleBestSeller}
    className={`filter ${selectedItem=== 2 ? 'bg-fuchsia-900 text-white' : 'text-black'}`}
    >
        Best Seller
    </button>
    </Link>
    <button 
    onClick={handleSpecial}
    className={`filter ${selectedItem=== 3 ? 'bg-fuchsia-900 text-white' : 'text-black'}`}
    >
        Special
    </button>
</section> 
 )
}

export default Filters