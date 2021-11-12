import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const{user, userRegister, authError} = useAuth();

    

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        userRegister(loginData.email, loginData.password, history);
        e.preventDefault();
    }
    
    return (
        <div>
            <div class="container mx-auto px-4">
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto flex flex-wrap items-center">
                <div class="lg:max-w-lg lg:ml-36 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/CBZNk0g/giphy.gif"/>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5 uppercase">Register</h2>
                    <form  onSubmit={handleLoginSubmit}>
                    <div class="relative mb-4">
                        <label for="email"  class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email"  onBlur={handleOnBlur}  name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    <div class="relative mb-4">
                        
                        <label for="password"  class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" onBlur={handleOnBlur}  name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        <label for="password"    class="leading-7 text-sm text-gray-600">Re-type Password</label>
                        <input type="password"   onBlur={handleOnBlur} name="password2"  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    {user?.email && <p class="success">Register successfully!</p>}
                        {authError && <p class="error">{authError}</p>}
                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Submit</button>
                        
                    </form>
                    <Link to='/login'><button class="text-lg text-gray-500 mt-3">Log In Now</button></Link>
                    
                    
                    </div>
                </div>
            </section>
            </div>
  
        </div>
    );
};

export default Register;