import React, { useState } from 'react';
// import Bg from './images/login.jpg';
import { useNavigate } from "react-router-dom";
import { loginApi } from './FruitApi';

function Message() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const navigate = useNavigate();


    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeUserName = (event) => {
        setUserName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        if (!isValidEmail(event.target.value)) {
            setEmailError('Email is Invalid');
        } else {
            setEmailError(null);
        }
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        if (event.target.value.length <= 7) {
            setPasswordError('Password must have 8 characters');
        } else {
            setPasswordError(null);
        }
        setPassword(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            username: userName,
            email,
            password,
        };
        console.log(data)
        const apiData = await loginApi(data);
        console.log(apiData);
        // switch (apiData?.Message) {
        //   case "Invalid Email":
        //     setEmailError("Invalid Email Address!");
        //     setPasswordError("Wrong Password!");

        //     break;
        //   case "Invalid Password":
        //     setPasswordError("Wrong Password!");
        //     break;
        //   case "you don't have an access.contact your admin":
        //     setEmailError("Access Denied");
        //     break;
        //   default:
        //     if (apiData?.statusCode === 200) {
        //       navigate("/home");
        //     }
        //     setPasswordError("");
        //     setEmailError("");
        //     break;
        // }
    };



    const handleClear = () => {
        setEmail('');
        setPassword('');
    };
    // bg-[url('./images/fruit.jpg')]

    return (
        <div className="h-screen w-screen bg-cover bg-center bg-fruit">

            <div className='flex justify-center '>
                <div className='flex-wrap max-w-[400px] border rounded-2xl p-20 m-40 border-white solid absolute top-0 font-sans backdrop-blur-[5px] '>
                    <div>
                        <span className='flex dark:text-white justify-center text-4xl antialiased italic font-bold  '> Login </span>
                    </div>
                    <div className='font-serif'>
                        <span className='flex-wrap m-12 space-x-2 '>
                            <p className='text-white pr-8 antialiased text-xl font-semibold ' > UserName  </p>
                            <div className='bg-transparent bg-opacity-5'>
                                <input
                                    id='UserName'
                                    name='userName'
                                    className=' bg-gray-700 mt-2 pt-2 w-60 border focus:bg-gray-800 rounded-tr rounded-br rounded-tl rounded-bl '
                                    value={userName}
                                    onChange={handleChangeUserName}
                                    type="text" />
                            </div>
                        </span>
                    </div>
                    <div className='font-serif'>
                        <span className='flex-wrap m-12 space-x-2 '>
                            <p className='text-white pr-20 antialiased text-xl font-semibold  ' > Email  </p>
                            <div className='bg-transparent bg-opacity-5'>
                                <input
                                    id='email'
                                    name='email'
                                    className='bg-gray-700 mt-2 pt-2 w-60 border focus:bg-gray-800  rounded-tr rounded-br rounded-tl rounded-bl '
                                    value={email}
                                    onChange={handleChangeEmail}
                                    type="text" />
                                {emailError && <h4 className='text-red-500'>{emailError}</h4>}
                            </div>
                        </span>
                    </div>
                    <div>
                        <span className='flex-wrap m-12 space-x-2 '>
                            <p className='text-white pr-10 antialiased font-semibold  text-xl  '> Password  </p>
                            <div className=' bg-transparent bg-opacity-5'>
                                <input
                                    id='password'
                                    name='password'
                                    className='bg-gray-700 mt-2 pt-2 focus:bg-gray-800 w-60 border rounded-tr rounded-br  rounded-tl rounded-bl'
                                    value={password}
                                    onChange={handleChangePassword}
                                    type="password" />
                                {passwordError && <h2 className='text-red-500'>{passwordError}</h2>}
                            </div>
                        </span>
                    </div>
                    <div className='flex justify-around '>
                        <div className=''>
                            <button name='submit' className='text-white border rounded-tr rounded-br rounded-tl rounded-bl w-20' onClick={handleSubmit}>
                                Submit
                            </button>

                        </div>
                        <div className=''>
                            <button name='clear' className='text-white border rounded-tr rounded-br rounded-tl rounded-bl w-20' onClick={handleClear}>
                                Clear
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message