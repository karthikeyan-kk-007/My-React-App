import React from 'react'

const PlanDetails = () => {
    return (
        <div className=' bg-white shadow-lg rounded-lg h-96 pl-2 ml-4 mr-6 space-y-8'>
            <div className='flex border-b-2 font-open-sans font-medium text-gray-700 w-full h-[15%] items-center  '>
                <p className='w-[95%]'> Plan Details</p>
                <a href='/#' className='text-base'>View</a>
            </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-3 h-[85%] '>
                <div className=' bg-white w-56 h-[85%] rounded-lg p-5 shadow-lg border-2 space-y-6  '>
                    <div className=' bg-gray-100 h-[66%] space-y-6 pt-2'>
                        <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <g opacity="0.2">
                                    <circle cx="20" cy="20" r="20" fill="#FF69B4" />
                                </g>
                                <path d="M19.9982 11.0459C19.9548 11.0458 19.9121 11.054 19.8719 11.0702L12.4491 14.1451C12.3106 14.2024 12.227 14.3449 12.2445 14.4937C12.69 18.2211 13.6439 21.5162 14.9604 24.0399C16.2769 26.5636 17.9605 28.3355 19.9019 28.9389C19.9664 28.9588 20.0351 28.9588 20.0995 28.9389C22.0409 28.3352 23.7214 26.5637 25.038 24.0399C26.3546 21.5162 27.3117 18.221 27.7572 14.4937C27.7746 14.3447 27.6907 14.2022 27.5518 14.1451L20.1291 11.0702C20.0875 11.0534 20.0429 11.0452 19.9982 11.0459ZM20.0048 15.0897C20.1311 15.091 20.2457 15.1631 20.3016 15.2761L21.3618 17.4192L23.7318 17.7639C23.8581 17.7821 23.9629 17.8702 24.0024 17.9911C24.042 18.1122 24.0093 18.2451 23.9181 18.334L22.202 20.0024L22.6062 22.3587C22.6276 22.4841 22.5758 22.6107 22.4728 22.6855C22.3697 22.7602 22.2332 22.7702 22.1202 22.7112L20 21.5981L17.8784 22.7112C17.7654 22.7704 17.6285 22.7604 17.5253 22.6852C17.4222 22.6101 17.3707 22.4829 17.3927 22.3574L17.7995 20.0024L16.0834 18.3328C15.9922 18.2439 15.9595 18.111 15.9988 17.9901C16.0383 17.8692 16.143 17.781 16.2691 17.7626L18.6397 17.4186L19.7004 15.2761C19.7367 15.2028 19.7988 15.1454 19.8746 15.1145C19.9158 15.0978 19.9602 15.0892 20.0048 15.0897Z" fill="#FF69B4" />
                            </svg>
                        </div>
                        <div className='text-gray-700 font-open-sans text-base font-medium flex justify-center'>Active plan users</div>
                        <div className='text-gray-700 font-open-sans text-xl font-bold flex justify-center'>390</div>
                    </div>
                    <div className='h-[34.48%]'>

                    </div>
                </div>
                <div className=' bg-white w-56 h-[85%] rounded-lg p-5 shadow-lg border-2 space-y-6  '>
                    <div className=' bg-gray-100 h-[66%] space-y-6 pt-2'>
                        <div className='flex justify-center'>
                            <div className='border rounded-full bg-teal-100 w-9 h-9 flex items-center justify-center text-teal-500 font-open-sans font-semibold text-xl uppercase'>
                                P
                            </div>
                        </div>
                        <div className='text-gray-700 font-open-sans text-base font-medium flex justify-center'>Total platinum users</div>
                        <div className='text-gray-700 font-open-sans text-xl font-bold flex justify-center'>110</div>
                    </div>
                    <div className='h-[34.48%]'>

                    </div>
                </div>
                <div className=' bg-white w-56 h-[85%] rounded-lg p-5 shadow-lg border-2 space-y-6  '>
                    <div className=' bg-gray-100 h-[66%] space-y-6 pt-2'>
                        <div className='flex justify-center'>
                            <div className='border rounded-full  w-9 h-9 flex items-center justify-center bg-blue-200 text-indigo-600 font-open-sans font-semibold text-lg uppercase'>
                                G
                            </div>
                        </div>
                        <div className='text-gray-700 font-open-sans text-base font-medium flex justify-center'>Total gold users</div>
                        <div className='text-gray-700 font-open-sans text-xl font-bold flex justify-center'>90</div>
                    </div>
                    <div className='h-[40%]'>

                    </div>
                </div>
                <div className=' bg-white w-56 h-[85%] rounded-lg p-5 shadow-lg border-2 space-y-6  '>
                    <div className=' bg-gray-100 h-[66%] space-y-6 pt-2'>
                        <div className='flex justify-center'>
                            <div className='border rounded-full  w-9 h-9 flex items-center justify-center bg-purple-300 text-purple-500 font-open-sans font-semibold text-lg uppercase'>
                                S
                            </div>
                        </div>
                        <div className='text-gray-700 font-open-sans text-base font-medium flex justify-center'>Total silver users</div>
                        <div className='text-gray-700 font-open-sans text-xl font-bold flex justify-center'>150</div>
                    </div>
                    <div className='h-[34.48%]'>

                    </div>
                </div>
                <div className=' bg-white w-56 h-[85%] rounded-lg p-5 shadow-lg border-2 space-y-6  '>
                    <div className=' bg-gray-100 h-[66%] space-y-6 pt-2'>
                        <div className='flex justify-center'>
                            <div className='border rounded-full  w-9 h-9 flex items-center justify-center bg-purple-300 text-purple-500 font-open-sans font-semibold text-lg uppercase'>
                                T
                            </div>
                        </div>
                        <div className='text-gray-700 font-open-sans text-base font-medium flex justify-center'>Total trial users</div>
                        <div className='text-gray-700 font-open-sans text-xl font-bold flex justify-center'>40</div>
                    </div>
                    <div className='h-[34.48%]'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanDetails