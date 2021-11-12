import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <div className="container mx-auto">
            <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/home"><button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-20" src="https://i.ibb.co/pvnzkNc/logo.png" alt="" /></button></Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/home'><button className="mr-5 hover:text-gray-900">Home</button></Link>
                    <button className="mr-5 hover:text-gray-900">About</button>
                    <Link to='/exploreproduct'><button className="mr-5 hover:text-gray-900">Explore</button></Link>
                    <button className="mr-5 hover:text-gray-900">Support</button>
                    </nav>
                    
                    

                    <div className="relative">
                    <input type="checkbox" id="sortbox" className="hidden absolute"/>
                    <label for="sortbox" className="flex items-center space-x-1 cursor-pointer">
                    <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg></span>
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </label>

                        <div id="sortboxmenu" className="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10">
                        <ul className="block text-left text-gray-900 divide-dashed">
                           {
                               user?.email ?   <li><button onClick={logout} className="block px-3 py-2 hover:bg-gray-200">Logout
                               </button> </li>
                               :
                               <Link to='/login'><li><button className="block px-3 py-2 hover:bg-gray-200">Login</button></li></Link> 
                               
                           }
                            {/* <Link to='/register'><li><button className="block px-3 py-2 hover:bg-gray-200">Register</button></li></Link> */}
                            
                        </ul>
                    </div>
                </div>
                </div>
            </header>
            </div>
            
        </div>
        
    );
};


export default Header;