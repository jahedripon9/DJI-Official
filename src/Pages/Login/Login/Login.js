import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, userLogin, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        userLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <div class="container mx-auto px-4">
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto flex flex-wrap items-center">
                <div class="lg:max-w-lg lg:ml-36 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/301G7cQ/608d2b66fc4eabc6ec338c207222b232.png"/>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 class="text-gray-900 text-lg font-medium title-font mb-5">LOG IN</h2>
                    <form  onSubmit={handleLoginSubmit}>
                    <div class="relative mb-4">
                        <label for="email" type="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" onBlur={handleOnBlur}  name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div class="relative mb-4">
                        <label for="passwprd" type="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" onBlur={handleOnBlur}  name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    {user?.email && <p severity="success">Login successfully!</p>}
                        {authError && <p severity="error">{authError}</p>}
                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Login</button>
                    </form>
                    
                    <Link to='/register'><button class="text-xs text-gray-500 mt-3">Create Your DJI Account</button></Link>
                    </div>
                </div>
            </section>
            </div>
  
        </div>
    );
};

export default Login;