import React from 'react'
import loginDesign from './images/loginDesign.png'
import ducoLogo from './images/duco.png'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const signInPage = () => {
  return (
    <div className='flex selection:text-white selection:bg-purple-500'>
      <div className=' bg-cover 2xl:w-3/6 h-screen bg-center 2xl:bg-ducoBg ' />
      <div className='flex 2xl:w-3/6 w-screen h-screen justify-center items-center '>
        <div className='flex-wrap space-y-7'>
          <img src={`${loginDesign}`} alt='design' className='absolute top-0 right-0' />
          <img src={`${ducoLogo}`} alt='design' className='mx-auto' />
          <div className='font-display text-2xl text-center  font-medium text-gray-800 '>
            <p >Welcome back!</p>
            <p >Sign in</p>
          </div>
          <div className='grid justify-center  text-sm leading-loose text-#525252  antialiased space-y-6' >
            <div className='' >
              <span className=''>
                Email address
              </span>
              <div>
                <input
                  type='text'
                  name='email'
                  value="subbuvenkatesh.a@icanio.com"
                  className='rounded-md border-2 border-gray-500 focus:border-purple-800 w-80 h-11 pl-2 font-normal focus:outline-none'
                />
              </div>
            </div>
            <div className='space-y-1'>
              <div className=''>
                <span className=''>
                  Password
                </span>
              </div>
              <div className=' flex'>
                <div className=''>
                  <input
                    type='password'
                    name='password'
                    value="12345678"
                    className='rounded-md  border-2 border-gray-500 focus:border-purple-800 focus:outline-none w-72 h-11 pl-2 font-normal  rounded-r-none border-r-0 group' />
                </div>
                <div className='flex items-center rounded-lg w-8 border-2 border-gray-500 focus:border-purple-800 focus:outline-none rounded-l-none border-l-0 group-focus:text-purple-800'  >
                  <VisibilityOffIcon />
                </div>
              </div>
            </div>
            <button className='bg-purple-500 text-white w-80 h-11 '>
              Sign in
            </button>
            <div>
              <a href='#' className='flex justify-center'>Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default signInPage