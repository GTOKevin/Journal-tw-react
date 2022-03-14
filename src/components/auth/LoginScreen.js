import React from 'react';
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="font-bold text-3xl text-center mb-3 text-white">Login</h3>

                    <form>

                        <input  
                            type="text"
                            placeholder="Email"
                            name="email"
                            className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                            autoComplete="off"
                        />

                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                        />


                        <button
                            type="submit"
                            className="py-1 bg-gray-50 w-full my-4 rounded font-semibold"
                        >
                            Login
                        </button>

                        
                        <div className="grid grid-cols-4 text-white">
                            <p className='col-span-4 font-semibold text-center'>Login with social networks</p>

                            <div 
                                className="col-span-4 flex justify-center bg-white py-1.5 my-2 px-2 rounded text-black"
                            >
                                <div className="google-icon-wrapper">
                                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                                </div>
                                <p className="pl-2">
                                    <b>Sign in with google</b>
                                </p>
                            </div>
                        </div>

                        <div className='w-full flex justify-end text-white mt-2 font-semibold'>
                        <Link 
                            to="/auth/register"
                        >
                            Create new account    
                        </Link>

                        </div>
                       
                    </form>

          
           
        </>
    )
}
