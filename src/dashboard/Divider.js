import React from 'react'

const Divider = ({title}) => {
    return (
        <section className='w-5/6 mx-auto my-10'>
            <div className=' relative'>
                {/* Divider */}
                <div className='absolute inset-0 flex items-center'>
                    <div className='border border-slate-200 w-9/12 mx-auto ' ></div>
                </div>
                {/* Text */}
                <div className=' flex justify-center relative'>
                    <div className='font-cinzel text-slate-500 text-4xl bg-white px-4'>{title}</div>
                </div>
            </div>
        </section>)
}

export default Divider