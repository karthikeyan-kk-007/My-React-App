import React, { useState } from 'react'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';




function SpecialCard({fruit}) {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount(count+1)
  }
  const handleRemove = () => {
    if(count!==0){
      setCount(count-1)
    }
  }
  return (
    <div className='rounded-2xl shadow-lg overflow-hidden group transform hover:scale-110 duration-10 0  relative '>
    <Link to={`/home/fruitshop/Latest/${fruit.name}`}>
    <button>
        <img src={require(`../images/${fruit.image || '1'}.jpeg`)} alt={`${fruit.name}`} className='w-96 h-52 object-cover ' />
        <div className='flex flex-col items-center my-1 space-y-1 '>
            <span className='font-display block'>{fruit.name}</span>
            <span className='font-display text-fuchsia-900'>₹{fruit.price}</span>
            <div className='' >
          <AddCircleIcon className='invisible group-hover:visible text-fuchsia-300 hover:text-fuchsia-500' onClick={handleAdd}/>
          <button onClick={handleAdd}>
          <span className={`invisible group-hover:visible uppercase text-fuchsia-500 text-xs ${count>=1}?'hidden relative':'hidden' `}>Add to Cart</span>
          </button>
          <RemoveCircleOutlinedIcon className='invisible group-hover:visible text-red-300 hover:text-red-500' onClick={handleRemove} />
          </div>
          <span className={count >= 1 ? 'block absolute bottom-10 right-4' : 'hidden'}>Quantity :<br></br> {count}</span>
        </div>
        <span className='absolute top-3 right-3 bg-sky-300 text-white border border-sky-300 rounded-lg text-sm'>1% off  </span>
        </button>
        </Link>
    </div>
  )
}

export default SpecialCard