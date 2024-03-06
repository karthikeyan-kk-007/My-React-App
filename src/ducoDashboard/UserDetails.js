import React from 'react'

const UserDetails = () => {
    return (
        <div className='2xl:flex sm:flex-col-2  space-x-8 h-72 justify-center items-start bg-dashboardBg bg-no-repeat w-full '>
            <div className=' flex space-x-6 my-32 '>
                <div className='bg-white w-full sm:w-96 h-36 rounded-md p-5 shadow-lg'>
                    <div className='font-open-sans leading-normal space-y-3 w-[50%]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                            <circle opacity="0.2" cx="18" cy="18.417" r="18" fill="#FF69B4" />
                            <path d="M17.8934 21.4836C17.2489 21.8301 16.5148 22.0382 15.727 22.0382C14.9392 22.0382 14.2051 21.8303 13.5605 21.4836C11.8597 21.986 10.8214 23.6321 10.4453 25.1049H21.0087C20.6327 23.6321 19.5943 21.9861 17.8934 21.4836Z" fill="#FF69B4" />
                            <path d="M15.7276 13.6865C13.6328 13.6865 11.9141 15.3325 11.9141 17.3771C11.9141 19.4215 13.6149 21.0676 15.7276 21.0676C17.8402 21.0676 19.5412 19.4216 19.5412 17.3771C19.5412 15.3325 17.8403 13.6865 15.7276 13.6865Z" fill="#FF69B4" />
                            <path d="M20.4943 22.8699H26.152C25.7759 21.4145 24.7376 20.0283 23.0366 19.5259C22.3921 19.8724 21.658 20.0804 20.8702 20.0804C20.333 20.0804 19.8318 19.9937 19.3483 19.8205C19.0798 20.2537 18.7396 20.7042 18.3457 21.0334C19.2947 21.3797 20.011 22.1767 20.4943 22.8698L20.4943 22.8699Z" fill="#FF69B4" />
                            <path d="M19.7269 18.9194C20.1208 19.0408 20.5325 19.11 20.9623 19.0927C22.8959 19.0581 24.5252 17.568 24.6684 15.6968C24.8475 13.531 23.075 11.729 20.8728 11.729C19.53 11.729 18.3483 12.422 17.668 13.4444C18.5632 13.9468 19.2614 14.7092 19.6553 15.6448C19.8344 16.0607 19.9238 16.5285 19.9238 16.979L19.9417 17.5508C19.9594 18.0185 19.8879 18.4862 19.7267 18.9194L19.7269 18.9194Z" fill="#FF69B4" />
                        </svg>
                        <p className='text-gray-700 font-open-sans text-base font-medium'>Total active users</p>
                        <p className='text-gray-700 font-open-sans text-xl font-bold'>3500</p>
                    </div>
                    <div >
                    </div>
                </div>
                <div className='bg-white w-full sm:w-96 h-36 rounded-md p-5 shadow-lg'>
                    <div className='font-open-sans leading-normal space-y-3'>
                        <div className='border rounded-full bg-teal-100 w-9 h-9 flex items-center justify-center text-teal-500 font-open-sans font-semibold text-xl uppercase'>
                            D
                        </div>
                        <p className='text-gray-700 font-open-sans text-base font-medium'>Duco registered users</p>
                        <p className='text-gray-700 font-open-sans text-xl font-bold'>2400</p>

                    </div>
                    <div>

                    </div>
                </div>

                <div className='bg-white w-full sm:w-96 h-36 rounded-md p-5 shadow-lg'>
                    <div className='font-open-sans leading-normal space-y-3'>
                        <div className='border rounded-full  w-9 h-9 flex items-center justify-center bg-blue-200 text-indigo-600 font-open-sans font-semibold text-lg uppercase'>
                            UII
                        </div>
                        <p className='text-gray-700 font-open-sans text-base font-medium'>Migrated from UII users</p>
                        <p className='text-gray-700 font-open-sans text-xl font-bold'>1100</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails