import React from 'react'

const TopSellers = ({seller}) => {
  return (
    <div className=' relative space-y-6'>
       <img 
className={`w-60 mx-16 border hover:shadow-2xl max-w-xs rounded-full object-cover transform hover:scale-110 duration-100 ${
  seller.rank === 1
    ? 'bg-amber-200 border border-yellow-400 '
    : seller.rank === 2
    ? 'bg-violet-100 border border-violet-100 '
    : seller.rank === 3
    ? 'bg-amber-500 border border-violet-100 w-20 '
    : '' // Add a default case or an empty string if needed
}`}
        src={require(`../images/${seller.image}.jpg`)} 
        alt={`${seller.sellerName}`}/>
        <div className={`absolute bottom-0 right-80 font-display  
        ${seller.rank === 1 ? 'text-yellow-400 '
        : seller.rank===2?'text-violet-400'
        :seller.rank===3?'text-slate-400 ':'' }  `}>
        Rank :{seller.rank}
        </div>
        <div className='flex flex-col items-center pr-40 font-display'> 
            <span className=''>
            sellerName : {seller.sellerName}
            </span>
            <span>
            totalSales : {seller.totalSales}
            </span>
            
        </div>
        
    </div>
  )
}

export default TopSellers