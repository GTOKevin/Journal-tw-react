import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="font-bold text-3xl text-center mb-3 text-white">Nuevo Usuario</h3>

            <form>

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                    autoComplete="off"
                />

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

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="w-full my-3 pl-2 rounded py-0.5 ring-2 transition duration-200 ease-in-out focus:outline-none focus:ring-indigo-600 "
                />


                <button
                    type="submit"
                    className="py-1 bg-gray-50 w-full my-4 rounded font-semibold"
                >
                    Registrarx
                </button>

               
                <div className='w-full flex justify-end text-white mt-2 font-semibold'>
                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Ya se encuentra registrado?
                </Link> 
                </div>
               

            </form>
        </>
    )
}
